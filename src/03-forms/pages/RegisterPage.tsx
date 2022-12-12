import { ChangeEvent, FormEvent, useState } from 'react';
import useForm from '../hooks/useForm';
import '../styles/styles.css';

const RegisterPage = () => {
	const {
		formData,
		email,
		name,
		password1,
		password2,
		onChange,
		reset,
		isValidEmail,
	} = useForm({
		name      : '',
		email     : '',
		password1 : '',
		password2 : '',
	});

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(formData);
	};

	return (
		<div>
			<h1>Register Page</h1>

			<form onSubmit={onSubmit}>
				<input
					type='text'
					name='name'
					placeholder='name'
					value={name}
					onChange={onChange}
					className={`${name.trim().length <= 0 && 'has-error'}`}
				/>
				{name.trim().length <= 0 && <span>Este campo es necesario</span>}
				<input
					type='email'
					name='email'
					placeholder='email'
					value={email}
					onChange={onChange}
					className={`${!isValidEmail(email) && 'has-error'}`}
				/>
				{!isValidEmail(email) && <span>Email no valido</span>}
				<input
					type='password'
					name='password1'
					placeholder='password'
					value={password1}
					onChange={onChange}
				/>
				<input
					type='password'
					name='password2'
					placeholder='repeat password'
					value={password2}
					onChange={onChange}
				/>

				<button type='submit'>Submit</button>
				<button
					type='reset'
					onClick={reset}
				>
					Reset
				</button>
			</form>
		</div>
	);
};

export default RegisterPage;
