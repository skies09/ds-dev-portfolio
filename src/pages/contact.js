import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
	const containerRef = useRef(null);
	const [formSubmitted, setFormSubmitted] = useState(false);

	function sendEmail(values) {
		console.log(values, "values");
		// emailjs
		// 	.send(
		// 		process.env.REACT_APP_EMAIL_SERVICE_KEY,
		// 		process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
		// 		values,
		// 		process.env.REACT_APP_EMAIL_KEY
		// 	)
		// 	.then(
		// 		(result) => {
		// 			console.log(result.text);
		// 			setFormSubmitted(true);
		// 		},
		// 		(error) => {
		// 			console.log(error.text);
		// 		}
		// 	);
	}

	const validationSchema = Yup.object({
		user_name: Yup.string(),
		user_email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		message: Yup.string(),
	});

	const ContactForm = () => {
		const initialValues = {
			user_name: "",
			user_email: "",
			message: "",
		};

		const handleSubmit = (values, { setSubmitting }) => {
			sendEmail(values);
			setSubmitting(false);
		};

		return (
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className="flex flex-col justify-start items-start w-10/12">
					<p className="text-2xl text-colorFive font-bold flex justify-center text-center font-monoTwo">
						Name
					</p>
					<Field
						className="w-full h-8 z-10 rounded-xl my-4"
						type="text"
						id="user_name"
						name="user_name"
					/>
					<p className="text-2xl text-colorFive font-bold flex justify-center text-center font-monoTwo">
						Email
					</p>
					<Field
						className="w-full h-8 z-10 rounded-xl my-4"
						type="email"
						id="user_email"
						name="user_email"
					/>
					<ErrorMessage
						className="error"
						name="user_email"
						component="div"
					/>
					<p className="text-2xl text-colorFive font-bold flex justify-center text-center font-monoTwo">
						Message
					</p>
					<Field
						className="w-full h-36 z-10 rounded-xl my-4"
						type="text"
						id="message"
						name="message"
					/>
					<button className="flex justify-center items-center mx-auto px-4 py-2 bg-colorFour text-colorFive border-2 border-colorFive rounded-xl" type="submit">
						Send
					</button>
				</Form>
			</Formik>
		);
	};

	return (
		<div
			className=" h-screen bg-colorThree"
			ref={containerRef}
			id="contact"
		>
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				className="pt-20 text-2xl text-colorFive font-bold flex justify-center text-center font-monoTwo"
			>
				Got a cool project idea?
				<br/>
				Get in touch!
			</motion.div>
		
			<div className="pt-8 flex flex-row justify-center items-center w-4/5 mx-auto">
				<motion.div
					className="w-1/2 flex justify-center items-start bg-colorThree h-96"
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				>
					{!formSubmitted && <ContactForm />}
					{formSubmitted && (
						<h2>Thanks, I'll get back to you shortly!</h2>
					)}
				</motion.div>
				<motion.div
					className="w-1/2 flex justify-center items-center bg-colorFive h-96"
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				>
					Contact
				</motion.div>
			</div>
		</div>
	);
}
