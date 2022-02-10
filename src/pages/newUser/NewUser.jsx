import './NewUser.css'
function Newuser()  {
    return (
        <div className='newUser'>
<h1 className="newUserTitle">New User</h1>
<form  className="newUserForm">
  <div className="newUserFormItem">
      <label>Username</label>
      <input type="text"  placeholder='kone'/>
  </div>
  <div className="newUserFormItem">
      <label>Full Name</label>
      <input type="text"  placeholder='Kone le bon'/>
  </div>
  <div className="newUserFormItem">
      <label>Email</label>
      <input type="email"  placeholder='votreemail@gmail.com'/>
  </div>
  <div className="newUserFormItem">
      <label>Password</label>
      <input type="password"  placeholder='password'/>
  </div>
  <div className="newUserFormItem">
      <label>Phone</label>
      <input type="phone"  placeholder='+212 6755 8903'/>
  </div>
  <div className="newUserFormItem">
      <label>Adress</label>
      <input type="text"  placeholder='Rabat | Morocco'/>
  </div>
 <div className="newUserFormItem">
      <label>Gender</label>
      <div className="newUserGender"> 
      <input type="radio" name='gender' id="male" value='male'/>
      <label for="male">Mal</label>
      <input type="radio" name='female' id="male" value='female'/>
      <label for="female">Female</label>
      <input type="radio" name='gender' id="others" value='others'/>
      <label for="others">Others</label>
      </div>
  </div>
  <div className="newUserFormItem">
  <label>Active</label>
  <select className='newUserSelect' name="active" id="active" >
 <option value="yes">Yes</option>
 <option value="no">Non</option>
 </select>
  </div>
 <button className="newUserButton">Create</button>
  </form>
        </div>
    );
}

export default Newuser;
