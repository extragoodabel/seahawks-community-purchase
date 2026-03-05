export type StatsResponse = {
  purchasePrice: number;
  participantsCount: number;
  equalShare: number | null;
};

export type Participant = {
  id: number;
  initials: string;
  county: string;
  createdAt: number;
};

export type ParticipantsResponse = {
  list: Participant[];
  count: number;
};

export type AddParticipantPayload = {
  name: string;
  county: string;
  email?: string;
};

export async function getStats(): Promise<StatsResponse> {
  const res = await fetch('/api/stats');
  if (!res.ok) throw new Error('Failed to load stats.');
  return res.json();
}

export async function getParticipants(): Promise<ParticipantsResponse> {
  const res = await fetch('/api/participants');
  if (!res.ok) throw new Error('Failed to load participants.');
  return res.json();
}

export async function addParticipant(payload: AddParticipantPayload) {
  const res = await fetch('/api/participants', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error || 'Unable to record participation.');
  }

  return data;
}
