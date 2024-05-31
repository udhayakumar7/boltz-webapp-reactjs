import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { LOGIN } from "../../assets";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { closeRegModal } from "../../redux/registermodelSlice";
import { openModal } from "../../redux/loginmodelSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { login } from "../../redux/authuserSlice";
import toast, { Toaster } from 'react-hot-toast'

const Register = () => {
  const isOpen = useSelector((state) => state.regisisterModel.isOpen);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeRegModal());
  };
  const openLogin = () => {
    dispatch(openModal());
    dispatch(closeRegModal());
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        const userCredential = await createUserWithEmailAndPassword (
          auth,
          values.email,
          values.password
        );
        console.log(userCredential.user);
        dispatch(login(userCredential.user));
        formik.resetForm()
        toast.success('logged in successfully', {
          position: "top-right"
        })
        dispatch(closeRegModal());
      } catch (err) {
        console.log(err);
        toast.error('somthing went wrong', {
          position: "top-right"
        })
      }
    },
  });

  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, provider).then((data) => {
        dispatch(login(data?.user));
        console.log(data?.user);
        dispatch(closeRegModal());
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={isOpen}
      onHide={handleCloseModal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="login">
        <IoClose
          className="close_btn"
          fontSize={24}
          onClick={handleCloseModal}
        />

        <Row>
          <Col>
            <div className="text-center header ">
              <h4>Get started</h4>
              <p>Please Sign up your account</p>
            </div>
            <div className="form_container">
              <form onSubmit={formik.handleSubmit}>
              <FloatingLabel
                  controlId="email"
                  label="Email address *"
                  className="mb-4"
                  id="email"
                  name="email"
                >
                  <Form.Control
                    type="text"
                    autoComplete='off'
                    placeholder="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <small className="text-danger" data-cy="error-email">
                      {formik.errors.email}
                    </small>
                  ) : null}
                </FloatingLabel>
                <FloatingLabel
                  controlId="password"
                  label="Password *"
                  id="password"
                  name="password"
                  autoComplete='off'
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <small className="text-danger" data-cy="error-password">
                      {formik.errors.password}
                    </small>
                  ) : null}
                </FloatingLabel>
                <Button type="submit" className="w-100 mt-4 login_btn">
                  {" "}
                  Creat Account
                </Button>
                <span className="or">or</span>
                <Button className="w-100 mt-3 mb-2 google_btn">
                  <FcGoogle fontSize={22} onClick={loginGoogle} /> Login with Google
                </Button>
                <p className="redirecttag">
                  Already have an Account? <span onClick={openLogin}>Login</span>
                </p>
              </form>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
