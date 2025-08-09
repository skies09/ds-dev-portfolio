import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import * as Yup from "yup";
import Footer from "../components/footer";
import SocialLinks from "../components/socialLinks";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const containerRef = useRef(null);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	function sendEmail(values) {
		values.from = "Dev portfolio";
		emailjs
			.send(
				process.env.REACT_APP_EMAIL_SERVICE_KEY,
				process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
				values,
				process.env.REACT_APP_EMAIL_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					setFormSubmitted(true);
					setLoading(false);
				},
				(error) => {
					console.log(error.text);
					setLoading(false);
				}
			);
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
			setLoading(true);
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
					<p className="text-lg lg:text-xl text-colorFive font-bold flex justify-center text-center font-monoTwo opacity-90">
						Name
					</p>
					<Field
						className="w-full h-8 z-10 rounded-xl my-2 lg:my-4 pl-2 font-monoTwo"
						type="text"
						id="user_name"
						name="user_name"
					/>
					<p className="text-lg lg:text-xl text-colorFive font-bold flex justify-center text-center font-monoTwo opacity-90">
						Email
					</p>
					<Field
						className="w-full h-8 z-10 rounded-xl my-2 lg:my-4 pl-2 font-monoTwo"
						type="email"
						id="user_email"
						name="user_email"
					/>
					<ErrorMessage
						className="text-sm text-colorOne font-bold flex justify-center text-center font-monoTwo opacity-90 -mt-2"
						name="user_email"
						component="div"
					/>
					<p className="text-lg lg:text-xl text-colorFive font-bold flex justify-center text-center font-monoTwo">
						Message
					</p>
					<Field
						as="textarea"
						className="w-full lg:h-24 z-10 rounded-xl my-2 lg:my-4 pl-2 pt-2 font-monoTwo"
						id="message"
						name="message"
						rows="3"
					/>
					<button
						className="flex justify-center items-center mx-auto px-6 py-1 mt-1 bg-colorTwo font-mono text-sm lg:text-lg text-colorFive font-medium border border-colorFive rounded-xl hover:bg-colorTwo hover:text-colorFive hover:border-2 hover:border-solid hover:border-colorFour gradient-background-skills"
						type="submit"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</Form>
			</Formik>
		);
	};

	return (
		<div>
			<div
				className="w-screen overflow-hidden bg-colorThree pb-6 lg:pb-0"
				ref={containerRef}
				id="contact"
			>
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
					viewport={{ once: true }}
					className="pt-16 text-lg lg:text-2xl text-colorFive font-bold flex justify-center text-center font-monoTwo"
				>
					Got a cool project idea?
					<br />
					Get in touch!
				</motion.div>

				<div className="pt-2 lg:pt-0 flex flex-col lg:flex-row justify-center items-center w-full lg:w-4/5 mx-auto">
					<motion.div
						className="w-10/12 lg:w-1/2 flex justify-center items-start bg-colorThree h-80 lg:h-96"
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 2,
							ease: "easeOut",
							delay: 0.2,
						}}
					>
						{!formSubmitted && <ContactForm />}
						{formSubmitted && (
							<p className="pt-16 lg:pt-28 text-lg lg:text-xl text-colorFive font-bold flex justify-center text-center font-monoTwo">
								Thanks, I'll get back to you shortly!
							</p>
						)}
					</motion.div>
					<motion.div
						className="w-1/2 flex flex-col justify-center items-center h-60 lg:h-[30rem] pt-16 lg:pt-0"
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 2,
							ease: "easeOut",
							delay: 0.2,
						}}
					>
						<div className="relative flex flex-col justify-start items-start border-b border-dotted border-colorFive">
							<div className="flex flex-row items-center mb-4">
								<FontAwesomeIcon
									icon={faPhone}
									size="lg"
									className="text-colorFive"
								/>
								<span className="ml-4 text-lg lg:text-xl text-colorFive tracking-wider">
									07950981097
								</span>
							</div>
							<div className="flex flex-row items-center mb-6">
								<FontAwesomeIcon
									icon={faEnvelope}
									size="lg"
									className="text-colorFive"
								/>
								<span className="ml-4 text-lg lg:text-xl text-colorFive tracking-wider">
									donna.smith08@icloud.com
								</span>
							</div>
						</div>
						<SocialLinks />
					</motion.div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
