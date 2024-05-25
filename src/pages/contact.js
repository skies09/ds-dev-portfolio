import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import * as Yup from "yup";
import SocialLinks from "../components/socialLinks";
// import emailjs from "@emailjs/browser";

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
				<Form className="flex flex-col justify-start items-start w-full lg:w-10/12">
					<p className="text-lg lg:text-2xl text-colorFive font-bold flex justify-center text-center font-monoTwo">
						Name
					</p>
					<Field
						className="w-full h-8 z-10 rounded-xl my-2 lg:my-4 pl-2"
						type="text"
						id="user_name"
						name="user_name"
					/>
					<p className="text-lg lg:text-2xl text-colorFive font-bold flex justify-center text-center font-monoTwo">
						Email
					</p>
					<Field
						className="w-full h-8 z-10 rounded-xl my-2 lg:my-4 pl-2"
						type="email"
						id="user_email"
						name="user_email"
					/>
					<ErrorMessage
						className="text-sm text-colorFour font-bold flex justify-center text-center font-monoTwo"
						name="user_email"
						component="div"
					/>
					<p className="text-lg lg:text-2xl text-colorFive font-bold flex justify-center text-center font-monoTwo">
						Message
					</p>
					<Field
						className="w-full h-6 lg:h-36 z-10 rounded-xl my-2 lg:my-4 pl-2 pb-24"
						type="textarea"
						id="message"
						name="message"
						rows="3"
					/>
					<button
						className="flex justify-center items-center mx-auto px-4 py-2 bg-colorFour text-colorFive border border-colorFive rounded-xl hover:bg-colorTwo hover:text-colorFive hover:border-2 hover:border-solid hover:border-colorFour"
						type="submit"
					>
						Send
					</button>
				</Form>
			</Formik>
		);
	};

	return (
		<div
			className="w-screen overflow-hidden h-screen bg-colorThree"
			ref={containerRef}
			id="contact"
		>
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				className="pt-16 lg:pt-20 text-lg lg:text-2xl text-colorFive font-bold flex justify-center text-center font-monoTwo"
			>
				Got a cool project idea?
				<br />
				Get in touch!
			</motion.div>

			<div className="pt-2 lg:pt-8 flex flex-col lg:flex-row justify-center items-center w-full lg:w-4/5 mx-auto">
				<motion.div
					className="w-10/12 lg:w-1/2 flex justify-center items-start bg-colorThree h-80 lg:h-96"
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
					className="w-1/2 flex flex-col justify-center items-center h-44 lg:h-96 pt-16 lg:pt-0"
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				>
					<div className="relative flex flex-col justify-start items-start border-b border-dotted border-colorFive">
						<div className="flex flex-row items-center mb-4">
							<FontAwesomeIcon
								icon={faPhone}
								size="md"
								className="text-colorFive"
							/>
							<span className="ml-4 text-lg lg:text-2xl text-colorFive tracking-wider">
								07950981097
							</span>
						</div>
						<div className="flex flex-row items-center mb-6">
							<FontAwesomeIcon
								icon={faEnvelope}
								size="md"
								className="text-colorFive"
							/>
							<span className="ml-4 text-lg lg:text-2xl text-colorFive tracking-wider">
								donna.smith09@hotmail.com
							</span>
						</div>
					</div>
					<SocialLinks />
				</motion.div>
			</div>
		</div>
	);
}
