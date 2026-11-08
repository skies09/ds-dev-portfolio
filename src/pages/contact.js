import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IconMail, IconPhone, IconSend } from "../components/icons";
import { motion } from "framer-motion";
import * as Yup from "yup";
import Footer from "../components/footer";
import SocialLinks from "../components/socialLinks";
import Button from "../components/button";
import SectionHeader from "../components/sectionHeader";
import emailjs from "@emailjs/browser";

const projectTypes = [
	"New website",
	"Web application",
	"Add features to existing site",
	"Fix / repair",
	"Not sure yet",
];

const initialValues = {
	user_name: "",
	user_email: "",
	project_type: "",
	message: "",
};

const validationSchema = Yup.object({
	user_name: Yup.string().required("Name is required"),
	user_email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),
	project_type: Yup.string().required("Please select a project type"),
	message: Yup.string()
		.min(10, "Please tell me a bit more (at least 10 characters)")
		.required("Message is required"),
});

const labelClass =
	"text-sm lg:text-base text-colorFive font-semibold font-display opacity-90";
const fieldClass =
	"w-full z-10 rounded-xl my-2 pl-3 py-2 font-display bg-colorTwo/50 border border-colorOne/20 text-colorFive focus:border-colorOne focus:outline-none transition-colors";
const selectClass = `${fieldClass} appearance-none pr-10 bg-no-repeat bg-[length:1rem_1rem] bg-[right_0.875rem_center] bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%23E6F4FA%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')]`;

const ContactForm = ({ onSuccess }) => {
	const [submitError, setSubmitError] = useState("");

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		setSubmitError("");

		try {
			const { user_name, user_email, project_type, message } = values;
			await emailjs.send(
				process.env.REACT_APP_EMAIL_SERVICE_KEY,
				process.env.REACT_APP_EMAIL_TEMPLATE_KEY,
				{
					user_name,
					user_email,
					from: "Dev portfolio",
					message: `[${project_type}] ${message}`,
				},
				{ publicKey: process.env.REACT_APP_EMAIL_KEY },
			);
			resetForm();
			onSuccess();
		} catch (error) {
			const detail =
				typeof error === "string"
					? error
					: error?.text || error?.message || "Unknown error";
			console.error("EmailJS error:", detail);
			setSubmitError(
				"Something went wrong sending your message. Please try again or email me directly.",
			);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form className="flex flex-col justify-start items-start w-full">
					<label htmlFor="user_name" className={labelClass}>
						Name *
					</label>
					<Field
						className={fieldClass}
						type="text"
						id="user_name"
						name="user_name"
						placeholder="Your name"
						autoComplete="name"
					/>
					<ErrorMessage
						className="text-sm text-colorOne font-monoTwo -mt-1 mb-1"
						name="user_name"
						component="div"
					/>

					<label htmlFor="user_email" className={labelClass}>
						Email *
					</label>
					<Field
						className={fieldClass}
						type="email"
						id="user_email"
						name="user_email"
						placeholder="you@example.com"
						autoComplete="email"
					/>
					<ErrorMessage
						className="text-sm text-colorOne font-monoTwo -mt-1 mb-1"
						name="user_email"
						component="div"
					/>

					<label htmlFor="project_type" className={labelClass}>
						What do you need? *
					</label>
					<Field
						as="select"
						className={selectClass}
						id="project_type"
						name="project_type"
					>
						<option value="">Select a project type</option>
						{projectTypes.map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</Field>
					<ErrorMessage
						className="text-sm text-colorOne font-monoTwo -mt-1 mb-1"
						name="project_type"
						component="div"
					/>

					<label htmlFor="message" className={labelClass}>
						Tell me about your project *
					</label>
					<Field
						as="textarea"
						className={`${fieldClass} min-h-[100px] pt-2`}
						id="message"
						name="message"
						rows="4"
						placeholder="What are you looking to build? Any timeline or budget in mind?"
					/>
					<ErrorMessage
						className="text-sm text-colorOne font-monoTwo -mt-1 mb-1"
						name="message"
						component="div"
					/>

					{submitError && (
						<p
							role="alert"
							className="text-sm text-colorOne font-sans mt-2 mb-1 w-full"
						>
							{submitError}
						</p>
					)}

					<Button
						text={isSubmitting ? "Sending..." : "Send Message"}
						variant="primary"
						icon={!isSubmitting ? IconSend : undefined}
						type="submit"
						disabled={isSubmitting}
						className="mx-auto mt-4 text-sm lg:text-base w-full"
					/>
				</Form>
			)}
		</Formik>
	);
};

const Contact = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	return (
		<div>
			<section
				className="relative w-screen overflow-hidden bg-colorThree pb-6 pt-12 lg:pt-16 section-wash-alt"
				id="contact"
			>
				<div className="px-4 mb-10">
					<SectionHeader
						eyebrow="Let's talk"
						title="Ready to start your project?"
						subtitle="Fill in the form below and I'll get back to you within 24 hours."
						className="mb-0"
					/>
				</div>

				<div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-5xl mx-auto px-4 gap-10 lg:gap-16">
					<motion.div
						className="w-full lg:w-1/2"
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						{!formSubmitted ? (
							<ContactForm onSuccess={() => setFormSubmitted(true)} />
						) : (
							<div className="text-center py-12">
								<p className="text-xl lg:text-2xl text-colorFive font-bold font-display mb-2">
									Thanks for reaching out!
								</p>
								<p className="text-colorFive/80 font-sans">
									I'll review your message and get back to you within 24
									hours.
								</p>
							</div>
						)}
					</motion.div>

					<motion.div
						className="w-full lg:w-1/2 flex flex-col justify-start items-start lg:pt-4"
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h3 className="text-xl font-display font-bold text-colorFive mb-4">
							Prefer to reach out directly?
						</h3>
						<div className="flex flex-col gap-4 border-b border-dotted border-colorFive/30 pb-6 mb-2 w-full">
							<a
								href="tel:07950981097"
								className="flex flex-row items-center text-colorFive hover:text-colorOne transition-colors no-underline"
							>
								<IconPhone className="text-colorOne w-5 h-5" />
								<span className="ml-4 text-base lg:text-lg tracking-wider font-monoTwo">
									07950981097
								</span>
							</a>
							<a
								href="mailto:donna.smith08@icloud.com"
								className="flex flex-row items-center text-colorFive hover:text-colorOne transition-colors no-underline"
							>
								<IconMail className="text-colorOne w-5 h-5" />
								<span className="ml-4 text-base lg:text-lg tracking-wider font-monoTwo break-all">
									donna.smith08@icloud.com
								</span>
							</a>
						</div>
						<SocialLinks />
					</motion.div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Contact;
