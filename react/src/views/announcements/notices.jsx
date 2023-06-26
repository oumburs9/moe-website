import Breadcrumb from "../../components/breadcrumb.component";
import Titles from "../../components/title.component";
import { AnnouncementCard } from "./job-vacancies";

const noticeList = [
    {
      title: "Important Announcement",
      shortDescription: "Upcoming Event",
      detailDescription: "Please be informed that there will be an upcoming event...",
      link: "https://example.com/notice1.pdf"
    },
    {
      title: "Reminder: Deadline Extension",
      shortDescription: "Submission Deadline",
      detailDescription: "The deadline for submission has been extended...",
      link: "https://example.com/notice2.pdf"
    },
    {
      title: "Notice for Holiday Closure",
      shortDescription: "Office Closure",
      detailDescription: "Please note that the office will remain closed...",
      link: "https://example.com/notice3.pdf"
    },
    {
      title: "Change in Schedule",
      shortDescription: "Class Rescheduling",
      detailDescription: "Due to unforeseen circumstances, there has been a change...",
      link: "https://example.com/notice4.pdf"
    },
    {
      title: "Important Announcement",
      shortDescription: "Policy Update",
      detailDescription: "There has been an update to the company policy...",
      link: "https://example.com/notice5.pdf"
    },
    {
      title: "Emergency Maintenance",
      shortDescription: "Service Disruption",
      detailDescription: "We are currently undergoing emergency maintenance...",
      link: "https://example.com/notice6.pdf"
    },
    {
      title: "Notice for Volunteers",
      shortDescription: "Volunteer Opportunity",
      detailDescription: "We are looking for volunteers to participate...",
      link: "https://example.com/notice7.pdf"
    },
    {
      title: "Upcoming Training Session",
      shortDescription: "Professional Development",
      detailDescription: "We are organizing a training session on...",
      link: "https://example.com/notice8.pdf"
    },
    {
      title: "Important Announcement",
      shortDescription: "Meeting Rescheduled",
      detailDescription: "The meeting scheduled for tomorrow has been...",
      link: "https://example.com/notice9.pdf"
    },
    {
      title: "Notice for Annual General Meeting",
      shortDescription: "Membership Update",
      detailDescription: "We would like to inform all members...",
      link: "https://example.com/notice10.pdf"
    },
    // Add more notices here...
  ];
  
const pageHeader = {title:"Notices",subtitle:"Read Notices Form Moe"}
function Notices() {
    const path = [{name: 'Home', link: ''},{name: 'Notices'}]
    return (
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <div className="flex flex-col bg-white p-20">
                <Titles title={pageHeader.title} subtitle={pageHeader.subtitle} />
                {noticeList.map(notice => <AnnouncementCard title={notice.title} shortdescription={notice.shortDescription} detail={notice.detailDescription} link={notice.link} linkTitle="Read More" />)
                }
            </div>
        </>
    )
}

export default Notices