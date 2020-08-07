import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useForm } from 'react-hook-form';


function LoginPage() {
  const { register, handleSubmit, errors } = useForm();


	const onSubmit = (data) => {

		try {
			console.log(data.username);

		const url = `${process.env.URL_EP}/login`
		const options = {
			method: `post`,
			body: JSON.stringify({ username: data.username, password: data.password }),
			headers: {
				'Content-Type': ' application/json',
				
			},
			credentials: 'include',
		};
		
		fetch(url, options)
			.then(res => {
				console.log(res);
				console.log(res.body);
			}).catch(err => console.log(err))
		} catch (error) {
			console.log(error);
		}
	
		
	}
	return (
		<Layout>
			<SEO keywords={[ `gatsby`, `tailwind`, `react`, `tailwindcss` ]} title="Home" />

			<section>
				<div className="p-10 border-gray-100 border rounded shadow-md m-auto w-full max-w-sm ">
					<p className="text-2xl py-2">Log In</p>
					<form className="flex flex-col max-w-md space-y-3 " onSubmit={handleSubmit(onSubmit)} action="">
						<label>Email </label>
						<input
							name="username"
							ref={register({ required: true })}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						/>

						{errors.username && <div>This is field is required;</div>}

						<label>Password </label>
						<input
							name="password"
							type="password"
							ref={register({ required: true })}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						/>

						{errors.password && <div>This is field is required;</div>}

						<input
							className="p-2 rounded shadow-sm hover:shadow-md duration-300 bg-blue-300  "
							type="submit"
						/>
					</form>
				</div>
			</section>
		</Layout>
	);
}

export default LoginPage;
