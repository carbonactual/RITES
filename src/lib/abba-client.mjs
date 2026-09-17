export async function invokeAbba(client, input, functionName = 'abba') {
  const request = input;
  const { data, error } = await client.functions.invoke(functionName, { body: request });
  if (error) throw error;
  return data;
}
