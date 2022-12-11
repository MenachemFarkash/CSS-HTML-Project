import { useFormik } from 'formik';

const SignUp = (props) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            like: '',
            email: '',
            age: '',
        },
    });
    console.table(formik.values);

    return (
        <form>
            <div style={{ display: 'flex' }}>
                <label style={{ paddingLeft: '2vw', marginTop: '2vh' }}>First Name:</label>
                <input
                    style={{ marginTop: '2vh', width: '10vw' }}
                    type="text"
                    name="firstName"
                    autoFocus
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                ></input>
            </div>
            <div style={{ display: 'flex' }}>
                <label style={{ paddingLeft: '2vw', marginTop: '2vh' }}>Last Name:</label>
                <input
                    style={{ marginTop: '2vh', width: '10vw' }}
                    type="text"
                    name="lastName"
                    onChange={formik.handleChange}
                ></input>
            </div>
            <div style={{ display: 'flex' }}>
                <label style={{ paddingLeft: '2vw', marginTop: '2vh' }}>Email:</label>
                <input
                    style={{ marginTop: '2vh', width: '10vw' }}
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                ></input>
            </div>
            <div style={{ display: 'flex' }}>
                <label style={{ paddingLeft: '2vw', marginTop: '2vh' }}>Age:</label>
                <input
                    style={{ marginTop: '2vh', width: '10vw' }}
                    type="text"
                    name="age"
                    onChange={formik.handleChange}
                ></input>
            </div>
            <button type="submit" onClick={() => props.onsubmit(formik.values)}>
                Submit
            </button>
        </form>
    );
};

export default SignUp;
