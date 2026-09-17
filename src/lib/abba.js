import { assertSupabase } from './supabase.js';
import { createAbbaRequest } from '../abba-contract.mjs';

export async function invokeAbba(client, input) {
  const functionName = import.meta.env.VITE_ABBA_FUNCTION || 'abba';
  const request = createAbbaRequest(input);
  const { data, error } = await client.functions.invoke(functionName, { body: request });
  if (error) throw error;
  return data;
}

export async function askAbba(input) {
  return invokeAbba(assertSupabase(), input);
}
