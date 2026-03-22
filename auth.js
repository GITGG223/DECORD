// auth.js - client API helpers
// If you host server on Replit or another host, set API_BASE to that full URL.
// Example: const API_BASE = 'https://my-demo-repl.username.repl.co';
const API_BASE = ''; // leave empty to use same origin (when frontend served by the server)

async function api(path, opts){
  const url = path.startsWith('http') ? path : (API_BASE ? (API_BASE + path) : path);
  const res = await fetch(url, opts);
  return res.json();
}

async function apiSearch(q){ return api('/api/search?q=' + encodeURIComponent(q)); }
async function apiSendRequest(from, to){ return api('/api/request', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ from, to }) }); }
async function apiAccept(me, from){ return api('/api/accept', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ me, from }) }); }
async function apiDecline(me, from){ return api('/api/decline', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ me, from }) }); }
async function apiGetRequests(user){ return api('/api/requests?user=' + encodeURIComponent(user)); }
async function apiGetContacts(user){ return api('/api/contacts?user=' + encodeURIComponent(user)); }
async function apiSendMessage(from, to, text){ return api('/api/message', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ from, to, text }) }); }
async function apiGetMessages(a,b){ return api('/api/messages?a=' + encodeURIComponent(a) + '&b=' + encodeURIComponent(b)); }

function showToast(msg){ try{ alert(msg); }catch(e){ console.log(msg); } }