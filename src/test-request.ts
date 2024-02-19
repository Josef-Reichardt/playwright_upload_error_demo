export default async function request(formData: FormData) {
  return await fetch('/api/upload', {
    'credentials': 'include',
    'headers': {
      'Accept': '*/*',
      'Accept-Language': 'de,en-US;q=0.7,en;q=0.3',
      'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIWjQ5eVAwcW9xeWg1Tm8xYnFYRVF0V1V6cUVQRVBMREotS2RWV01yWG5BIn0.eyJleHAiOjE3MDgwNzU4NTcsImlhdCI6MTcwODA3NTU1NywiYXV0aF90aW1lIjoxNzA4MDc1NTUzLCJqdGkiOiIxOTM5YTk1Zi1iZjI1LTQ0NmUtYmNkYy01OTQ4NWE1MDFmZTgiLCJpc3MiOiJodHRwczovL2lkLmNsZXJrLWNvbXBvbmVudC5sb2NhbC9yZWFsbXMvMDkwMDAwMDEiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiN2U1ODY3ZDEtZmRiYy00Zjc5LTljNTktM2M4MmExMDVkYTZjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic3BhIiwibm9uY2UiOiI1NDZjOTc3OC0yYTJjLTRhYWMtYThlOS0zNmM5MzU4YTg0YmIiLCJzZXNzaW9uX3N0YXRlIjoiNmMzZDQ1MTEtNmQ0ZS00NjliLWEyM2MtZjUwNDQ1MTBkZTQ5IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJhdC1mYWNoa3JhZWZ0ZXZlcmZhaHJlbl91c2VydGVtcGxhdGVzOndyaXRlIiwiZGVmYXVsdC1yb2xlcy0wOTAwMDAwMSIsInVzZXJzOnJlYWQiLCJhdC1mYWNoa3JhZWZ0ZXZlcmZhaHJlbl9yZWFsbXRlbXBsYXRlczpyZWFkIiwiYXQtZmFjaGtyYWVmdGV2ZXJmYWhyZW5fdGFza3M6d3JpdGUiLCJhdC1mYWNoa3JhZWZ0ZXZlcmZhaHJlbl91c2VydGVtcGxhdGVzOnJlYWQiLCJhdC1mYWNoa3JhZWZ0ZXZlcmZhaHJlbl9yZWFsbTp3cml0ZSIsImF0LWZhY2hrcmFlZnRldmVyZmFocmVuX3JlYWxtdGVtcGxhdGVzOndyaXRlIiwiYXQtZmFjaGtyYWVmdGV2ZXJmYWhyZW5fdGFza3M6cmVhZCIsImF0LWZhY2hrcmFlZnRldmVyZmFocmVuX2Fzc2lnbjp3cml0ZSIsIm9mZmxpbmVfYWNjZXNzIiwiYXQtZmFjaGtyYWVmdGV2ZXJmYWhyZW5fYXNzaWdub3duOndyaXRlIiwiYXQtZmFjaGtyYWVmdGV2ZXJmYWhyZW5fYXNzaWduOnJlYWQiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXJzOndyaXRlIiwiYXQtZmFjaGtyYWVmdGV2ZXJmYWhyZW5fYXNzaWdub3duOnJlYWQiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiNmMzZDQ1MTEtNmQ0ZS00NjliLWEyM2MtZjUwNDQ1MTBkZTQ5IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJBbm5hIE93bmVyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoib3duZXIiLCJnaXZlbl9uYW1lIjoiQW5uYSIsImZhbWlseV9uYW1lIjoiT3duZXIiLCJlbWFpbCI6Im93bmVyQGNsZXJrLWNvbXBvbmVudC5sb2NhbCJ9.CcnBT-dc_f0XG0O3Q94jopO_NaNl3_Ije6q9LHhjgR79rmyG6_WENdYK0kx0_RH9UZ1lqdkMceZ4LSK5l3jQEbzsbaCfzfP2Gx0jWMlXOIrlElaDxzYeYIR12mq1dhhXdnPNX37DBJhTqr_HV4c29Im4MlWSP1sSWtKebO_-rPMn0pklt8blG2n_4SPNHfxAarm3zbJqDXEHS31Zxpgn4HHRPnIBaotFrxSY7S9BG58UXDUBm4OsBkPXY0yAdpgRGC2Onzr34YBVk2eiJECs-M6qU9Eqr2v3VxqDgFluj4HJragnWUTmcLGadbjx7g33m6wjToYeMGgA1J6XBjXxIg',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Pragma': 'no-cache',
      'Cache-Control': 'no-cache'
    },
    'referrer': 'http://localhost:5173/task/65b35d6a149465541523cede?isNew=0&expanded=0,12',
    'body': formData,
    'method': 'POST',
    'mode': 'cors'
  })
}