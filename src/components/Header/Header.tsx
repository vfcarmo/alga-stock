import React from "react";
import { RootState } from "../../redux";
import { connect, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import "./Header.css";
import { Product } from "../../shared/Table/Table.mockdata";
import { User } from "../../services/Authentication.services";
import { logout, login } from "../../redux/Authentication/Authentication.actions";
import Swal from "sweetalert2";

declare interface HeaderProps {
  title: string;
  firstProduct: Product,
  profile?: User
}

const Header: React.FC<HeaderProps> = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const isLoggedIn = !!props.profile?._id

  const askToLogout = () => {
    Swal.fire({
      title: `Do you want logout the AlgaStock?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33'
    }).then(({ value }) => value && dispatch(logout()))
  }

  const handleLoginLogout = () => {
    isLoggedIn
      ? askToLogout()
      : history.push('/login')
  }
  return (
    <header className="AppHeader">
      <h1>{props.title}</h1>
      <div>
        <span onClick={handleLoginLogout}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </span>
      </div>
    </header>
  );
};

const mapStateToProps = (state: RootState) => ({
  firstProduct: state.products[1],
  profile: state.authentication.profile
})

export default connect(mapStateToProps)(Header);
