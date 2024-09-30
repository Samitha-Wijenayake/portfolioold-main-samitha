import { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate fade-in animation after page loads
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!name || !email || !message) {
      setError("Please fill all the fields");
      return;
    }

    const templateParams = {
      from_name: name,
      to_name: "Samitha Wijenayake",
      message: message,
      reply_to: email,
    };

    setLoading(true);
    emailjs
      .send(
        "service_qtkpad9",
        "template_zihdy7d",
        templateParams,
        "4qyBHt5XL9aHcIHho"
      )
      .then(
        function (response) {
          setSuccess("Message sent successfully!!");
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setSuccess("");
          }, 5000);
        },
        function (error) {
          setError("Failed to send the message");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16">
      <div className={`container mx-auto px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-5xl font-bold text-center mb-12 animate-fadeIn">
          Get in <span className="text-indigo-400">Touch</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Details Section */}
          <div className="w-full md:w-1/2 bg-gray-800 pt-10 pl-10 pr-10 pb-24 rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="mb-6 font-medium text-gray-400">
              I'm actively seeking Software Engineering intern opportunities, and my inbox is always open! Whether you have any inquiries or just want to connect, feel free to reach out. I'll do my best to respond promptly.
            </p>
            <ul>
              <li className="mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-indigo-400 animate-pulse" />
                F54/20, Udaya Mawatha, Udugama, Atala, Kegalle
              </li>
              <li className="mb-4 flex items-center">
                <FaPhoneAlt className="mr-3 text-indigo-400 animate-pulse" />
                <a href="tel:+94717447081" className="hover:text-indigo-300">
                  +94 71 140 2286
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-indigo-400 animate-pulse" />
                <a href="mailto:samithamahesh@gmail.com" className="hover:text-indigo-300">
                  samithamahesh@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Message Form Section */}
          <div className="w-full md:w-1/2 bg-gray-800 pt-10 pl-10 pr-10 pb-7 rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-4" onSubmit={sendEmail}>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <textarea
                placeholder="Your message"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full py-3 px-6 bg-indigo-500 rounded-lg text-white font-semibold hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-400"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {success && <p className="text-green-500 mt-2">{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
