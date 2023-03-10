const className="greeting";
class user={firstName:"Addala",lastName:"Revathi"};
const fullName=(user)=>user.firstName+" "+user.lastName;
const element=(
<div><h1 className={className}>Hello!{fullName(user)}</h1>
<p>good to see you</p>
</div>
);
ReactDOM.render(element,document.getElementById("root"));

