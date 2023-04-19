function supLoser(user) {
  return `What is up ${user}!`
}

function goAway(user) {
  return `Go away ${user}!`
}

function greeting(user, cb) {
  return cb(user)
}

console.log(greeting('Jim', goAway));
console.log(greeting('Jim', supLoser));
