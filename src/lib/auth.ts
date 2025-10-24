
export function getUser(){
  if (typeof window === 'undefined') return null;
  try{ return JSON.parse(localStorage.getItem("uhh_auth")||"null"); }catch{return null}
}
export function setUser(email:string){ if (typeof window!=='undefined') localStorage.setItem("uhh_auth", JSON.stringify({email})); }
export function clearUser(){ if (typeof window!=='undefined') localStorage.removeItem("uhh_auth"); }
