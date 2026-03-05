import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  addParticipant,
  getParticipants,
  getStats,
  Participant,
  StatsResponse
} from './api/client';

const COUNTIES = [
  'Adams', 'Asotin', 'Benton', 'Chelan', 'Clallam', 'Clark', 'Columbia',
  'Cowlitz', 'Douglas', 'Ferry', 'Franklin', 'Garfield', 'Grant',
  'Grays Harbor', 'Island', 'Jefferson', 'King', 'Kitsap', 'Kittitas',
  'Klickitat', 'Lewis', 'Lincoln', 'Mason', 'Okanogan', 'Pacific',
  'Pend Oreille', 'Pierce', 'San Juan', 'Skagit', 'Skamania',
  'Snohomish', 'Spokane', 'Stevens', 'Thurston', 'Wahkiakum',
  'Walla Walla', 'Whatcom', 'Whitman', 'Yakima'
];

function fmtCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

function fmtDate(ts: number) {
  return new Date(ts).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

const defaultStats: StatsResponse = {
  purchasePrice: 12_000_000_000,
  participantsCount: 0,
  equalShare: null
};

export default function App() {
  const [stats, setStats] = useState<StatsResponse>(defaultStats);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [name, setName] = useState('');
  const [county, setCounty] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function refresh() {
    const [statsData, participantsData] = await Promise.all([
      getStats(),
      getParticipants()
    ]);
    setStats(statsData);
    setParticipants(participantsData.list);
  }

  useEffect(() => {
    refresh().catch((err: Error) => setMessage(err.message));
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');

    try {
      const result = await addParticipant({ name, county, email });
      setStats(result.stats);
      setName('');
      setCounty('');
      setEmail('');
      setMessage('Participation recorded.');
      const participantsData = await getParticipants();
      setParticipants(participantsData.list);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Unable to record participation.');
    }
  }

  const equalShareDisplay = useMemo(() => {
    return stats.equalShare == null ? 'Not yet calculable' : fmtCurrency(stats.equalShare);
  }, [stats.equalShare]);

  return (
    <main className="page">
      <h1>A Community Proposal to Purchase the Seattle Seahawks</h1>
      <p>
        As directed by the late Paul Allen, the Seattle Seahawks are to be sold, with proceeds
        benefiting philanthropic causes. This proposal invites the people of Seattle and supporters
        everywhere to consider a collective purchase model inspired by Green Bay public ownership.
      </p>

      <section className="module">
        <h2>Financial Model</h2>
        <ul>
          <li>Purchase Price: {fmtCurrency(stats.purchasePrice)}</li>
          <li>Participants: {stats.participantsCount}</li>
          <li>Equal Share Per Participant: {equalShareDisplay}</li>
        </ul>
      </section>

      <section className="module">
        <h2>Join the Purchasing Collective</h2>
        <form onSubmit={onSubmit}>
          <label>
            Name or Initials
            <input value={name} onChange={(e) => setName(e.target.value)} required maxLength={60} />
          </label>

          <label>
            Washington County
            <select value={county} onChange={(e) => setCounty(e.target.value)} required>
              <option value="">Select a county</option>
              {COUNTIES.map((countyOption) => (
                <option key={countyOption} value={countyOption}>{countyOption}</option>
              ))}
            </select>
          </label>

          <label>
            Email (optional)
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={120}
            />
          </label>

          <button type="submit">Record Participation</button>
          <p>{message}</p>
        </form>
      </section>

      <section className="module">
        <h2>Public Ledger</h2>
        <ul>
          {participants.length === 0 ? (
            <li>No entries yet.</li>
          ) : (
            participants.map((participant) => (
              <li key={participant.id}>
                {participant.initials} — {participant.county} ({fmtDate(participant.createdAt)})
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}
