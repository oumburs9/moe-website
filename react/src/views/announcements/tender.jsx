import Breadcrumb from "../../components/breadcrumb.component";
import Titles from "../../components/title.component";
import { AnnouncementCard } from "./job-vacancies";

const tenderList = [
    {
      title: "Construction Project",
      shortDescription: "Building Construction",
      detailDescription: "We invite bids for a building construction project. The scope of work includes constructing a new building with state-of-the-art facilities. Interested contractors must have prior experience in similar projects and should submit their proposals with relevant documentation. The deadline for submission is approaching, and we encourage interested parties to review the tender document for more details. The selected contractor will be responsible for managing the entire construction process, ensuring quality workmanship, and meeting the project timelines. For further information, please refer to the tender document available at the provided link.",
      link: "https://example.com/tender1.pdf"
    },
    {
      title: "IT System Upgrade",
      shortDescription: "Software Upgrade",
      detailDescription: "We require services for upgrading our IT systems to enhance efficiency and productivity. The scope of work includes software development, hardware procurement, system integration, and user training. Interested vendors must have a strong track record in delivering IT projects of similar scale and complexity. The tender document provides detailed requirements and evaluation criteria. Prospective bidders are encouraged to carefully review the document before submitting their proposals. The deadline for proposal submission is approaching, and we look forward to receiving competitive offers. For more information and to download the tender document, please visit the provided link.",
      link: "https://example.com/tender2.pdf"
    },
    {
      title: "Supply of Medical Equipment",
      shortDescription: "Medical Equipment Tender",
      detailDescription: "We are seeking reliable suppliers for the procurement of various medical equipment and devices. The equipment includes diagnostic instruments, patient monitoring systems, surgical tools, and laboratory equipment. Interested suppliers must have relevant experience in the healthcare industry and provide detailed technical specifications and pricing information in their proposals. The tender document outlines the specific requirements and evaluation criteria. Suppliers are requested to submit their offers by the specified deadline. To access the complete tender document and find additional information, please follow the link provided.",
      link: "https://example.com/tender3.pdf"
    },
    {
      title: "Road Construction",
      shortDescription: "Road Infrastructure Project",
      detailDescription: "We have a tender for the construction of a new road to improve connectivity in the region. The project involves earthwork, pavement construction, drainage systems, and traffic management. Interested contractors with relevant experience in road construction are invited to submit their proposals. The tender document provides detailed technical specifications, project timelines, and evaluation criteria. Bidders must adhere to the submission guidelines and meet the specified deadline. For more information and to download the tender document, please visit the provided link.",
      link: "https://example.com/tender4.pdf"
    },
    {
      title: "Supply of Office Furniture",
      shortDescription: "Office Furniture Tender",
      detailDescription: "We are looking for reliable suppliers to provide high-quality office furniture for our expanding workspace. The furniture should be ergonomic, durable, and aesthetically pleasing. Interested vendors are requested to submit their proposals, including detailed product catalogs, pricing, and warranty information. The tender document outlines the specific furniture requirements and evaluation criteria. Suppliers must meet the deadline for proposal submission and ensure compliance with the terms and conditions. To access the complete tender document and find further details, please follow the provided link.",
      link: "https://example.com/tender5.pdf"
    },
    // Add more tenders here...
  ];
  
const pageHeader = {title:"Tender",subtitle:"Read Tender Form Moe"}
function Tender() {
    const path = [{name: 'Home', link: ''},{name: 'Tender'}]
    return (
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <div className="flex flex-col bg-white p-20">
                <Titles title={pageHeader.title} subtitle={pageHeader.subtitle} />
                {tenderList.map(tender => <AnnouncementCard title={tender.title} shortdescription={tender.shortDescription} detail={tender.detailDescription} link={tender.link} linkTitle="Read More" />)
                }
            </div>
        </>
    )
}

export default Tender