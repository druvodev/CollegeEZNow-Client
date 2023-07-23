const Admission = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server or store it in state.
    const form = e.target;
    const college = form.collegeName.value;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const date = form.date.value;
    const gender = form.gender.value;
    const subject = form.subject.value;
    const image = form.image.value;
    const motivationLetter = form.motivationLetter.value;
    const extracurricular = form.extracurricular.value;
    const admissionForm = {
      college,
      name,
      email,
      address,
      date,
      gender,
      subject,
      image,
      motivationLetter,
      extracurricular,
    };
    console.log(admissionForm);
    // Reset form fields after submission
    form.reset();
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center mt-10">
        Admission Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-xl mx-auto bg-white p-5 sm:p-10 rounded-2xl"
      >
        <div>
          <label htmlFor="collegeName" className="font-bold">
            Select College:
          </label>
          <select
            name="collegeName"
            id="collegeName"
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select College</option>
            <option value="Dhaka University">Dhaka University</option>
            <option value="Chittagong University">Chittagong University</option>
            <option value="Rajshahi University">Rajshahi University</option>
            <option value="Khulna University">Khulna University</option>
            <option value="Jahangirnagar University">
              Jahangirnagar University
            </option>
            <option value="Bangladesh Agricultural University">
              Bangladesh Agricultural University
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className="font-bold">
            Candidate Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="font-bold">
            Candidate Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="candidatePhone" className="font-bold">
            Candidate Phone:
          </label>
          <input
            type="tel"
            name="candidatePhone"
            id="candidatePhone"
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="font-bold">
            Address:
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="font-bold">
            Date of Birth:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="gender" className="font-bold">
            Gender:
          </label>
          <select
            name="gender"
            id="gender"
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="subject" className="font-bold">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="font-bold">
            Image:
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="motivationLetter" className="font-bold">
            Motivation Letter:
          </label>
          <textarea
            name="motivationLetter"
            id="motivationLetter"
            className="block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="extracurricular" className="font-bold">
            Extracurricular Activities:
          </label>
          <textarea
            name="extracurricular"
            id="extracurricular"
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="submit"
            value={"Submit"}
            className="px-10 py-1 border border-slate-500 rounded font-semibold hover:bg-slate-500 duration-200 hover:text-white mt-3"
          />
        </div>
      </form>
    </div>
  );
};

export default Admission;
