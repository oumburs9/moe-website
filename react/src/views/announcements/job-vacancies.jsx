import Titles from "../../components/title.component"

const pageHeader = {
    title: 'Job Vacancy',
    subtitle: 'Job vacancy from Moe'
}

const jobVacancies = [
    {
        Role: "Software Engineer",
        ShortDescription: "Looking for a talented Software Engineer with strong coding skills.",
        DetailDescription: "We are seeking a skilled software engineer to join our development team. In this role, you will be responsible for designing, coding, and modifying software applications according to client specifications. You will collaborate with cross-functional teams to develop high-quality software solutions. Required Qualifications: Bachelor's degree in Computer Science or a related field. Strong proficiency in programming languages such as Java, C++, or Python. Experience with software development methodologies and tools. Salary: Competitive salary based on experience. Application Deadline: July 15, 2023. If you are passionate about software development and love solving complex problems, we would love to hear from you!",
        RegistrationLink: "https://www.example.com/apply/software-engineer"
    },
    {
        Role: "Data Analyst",
        ShortDescription: "Exciting opportunity for a Data Analyst with a strong analytical mindset.",
        DetailDescription: "We are looking for a talented data analyst to join our analytics team. As a data analyst, you will be responsible for collecting, analyzing, and interpreting large data sets to identify trends and insights. You will work closely with stakeholders to understand their data needs and deliver actionable recommendations. Required Qualifications: Bachelor's degree in Statistics, Mathematics, or a related field. Proficiency in data analysis and visualization tools such as SQL, Python, or Tableau. Strong analytical and problem-solving skills. Salary: Competitive salary based on experience. Application Deadline: July 31, 2023. If you have a strong analytical mindset and a passion for transforming data into valuable insights, we want to hear from you!",
        RegistrationLink: "https://www.example.com/apply/data-analyst"
    },
    {
        Role: "Marketing Manager",
        ShortDescription: "Seeking a Marketing Manager to lead our marketing efforts and drive brand awareness.",
        DetailDescription: "We are seeking an experienced marketing manager to oversee our marketing campaigns and initiatives. As a marketing manager, you will be responsible for developing and implementing marketing strategies to promote our products or services. You will manage a team of marketing professionals and collaborate with other departments to achieve our business objectives. Required Qualifications: Bachelor's degree in Marketing, Business Administration, or a related field. Proven experience in developing and executing successful marketing campaigns. Strong leadership and communication skills. Salary: Competitive salary based on experience. Application Deadline: August 15, 2023. If you have a proven track record in driving successful marketing campaigns and a creative mindset, we would love to have you on board!",
        RegistrationLink: "https://www.example.com/apply/marketing-manager"
    }
];

const JobVacancyCard = ({ role, shortdescription, detail, link }) => {

    return <div key={role} className="flex flex-col p-3 mt-20 shadow-2xl rounded-xl">
        <h1 className="text-blue-500 text-xl font-bold capitalize p-3">
            {role}
        </h1>
        <div className="flex flex-col m-4 items-center justify-center bg-white">
            <h2 className="text-blue-500 font-bold text-lg underline lead-6 capitalize">
                {shortdescription}
            </h2>
            <div className="flex items-start mx-[10%] mt-3">
                <p className="text-md leading-6">
                    {detail}
                </p>
            </div>
            <div className="p-4 list-none ">
                <a href={link} className="text-blue-400 hover:text-green hover:underline">
                    Register Here
                </a>
            </div>
        </div>
    </div>
}
function JobVacancies() {
    // console.log(vaca)
    return (
        <>
            <div className="flex flex-col bg-white p-20">
                <Titles title={pageHeader.title} subtitle={pageHeader.subtitle} />
                {jobVacancies.map(jobs => <JobVacancyCard role={jobs.Role} shortdescription={jobs.ShortDescription} detail={jobs.DetailDescription} link={jobs.RegistrationLink} />)
                }
            </div>
        </>
    )
}

export default JobVacancies