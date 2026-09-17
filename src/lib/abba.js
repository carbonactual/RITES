import { assertSupabase } from './supabase.js';
import { createAbbaRequest } from '../abba-contract.mjs';
import { invokeAbba as invokeTransport } from './abba-client.mjs';

export async function invokeAbba(client, input) {
  const functionName = import.meta.env.VITE_ABBA_FUNCTION || 'abba';
  const request = createAbbaRequest(input);
  return invokeTransport(client, request, functionName);
}

export async function askAbba(input) {
  return invokeAbba(assertSupabase(), input);
}
