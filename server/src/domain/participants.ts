export type ParticipantRecord = {
  id: number;
  fullName: string;
  county: string;
  email: string | null;
  createdAt: number;
};

const participants: ParticipantRecord[] = [];

export function addParticipant(input: Omit<ParticipantRecord, 'id' | 'createdAt'>) {
  const record: ParticipantRecord = {
    id: participants.length + 1,
    fullName: input.fullName,
    county: input.county,
    email: input.email,
    createdAt: Date.now()
  };

  participants.push(record);
  return record;
}

export function getParticipantsNewestFirst() {
  return participants.slice().sort((a, b) => b.createdAt - a.createdAt);
}

export function getParticipantsCount() {
  return participants.length;
}
