const user={
    id:101,
    name:'ravi',
   preferences:{
    theme:'dark',
    language:'en'
   }
};
//shallow copy of user
let copyuser={...user}
//change name of copied user
copyuser.name='keerthan'
copyuser.preferences.theme='white'
console.log(user)
console.log(copyuser)