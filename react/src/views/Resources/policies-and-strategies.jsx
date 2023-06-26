import { useState } from "react"
import Titles from "../../components/title.component"
import Breadcrumb from "../../components/breadcrumb.component"
import { ResoucesTable } from "./guidelines-and-standards"

export const FileList = [
    {
        Description: "Document1",
        Size: "1.5 MB",
        Format: "docx",
        Date: "2023-06-01"
    },
    {
        Description: "Presentation",
        Size: "3.2 MB",
        Format: "pptx",
        Date: "2023-06-02"
    },
    {
        Description: "Spreadsheet",
        Size: "2.8 MB",
        Format: "xlsx",
        Date: "2023-06-03"
    },
    {
        Description: "Image",
        Size: "4.1 MB",
        Format: "jpg",
        Date: "2023-06-04"
    },
    {
        Description: "Report",
        Size: "2.7 MB",
        Format: "pdf",
        Date: "2023-06-05"
    },
    {
        Description: "Code",
        Size: "6.3 MB",
        Format: "zip",
        Date: "2023-06-06"
    },
    {
        Description: "Video",
        Size: "15.2 MB",
        Format: "mp4",
        Date: "2023-06-07"
    },
    {
        Description: "Design",
        Size: "1.8 MB",
        Format: "png",
        Date: "2023-06-08"
    },
    {
        Description: "Proposal",
        Size: "2.1 MB",
        Format: "docx",
        Date: "2023-06-09"
    },
    {
        Description: "File10",
        Size: "3.4 MB",
        Format: "pdf",
        Date: "2023-06-10"
    },
    {
        Description: "File11",
        Size: "2.5 MB",
        Format: "txt",
        Date: "2023-06-11"
    },
    {
        Description: "File12",
        Size: "8.9 MB",
        Format: "xlsx",
        Date: "2023-06-12"
    },
    {
        Description: "File13",
        Size: "2.3 MB",
        Format: "docx",
        Date: "2023-06-13"
    },
    {
        Description: "File14",
        Size: "5.7 MB",
        Format: "jpg",
        Date: "2023-06-14"
    },
    {
        Description: "File15",
        Size: "1.2 MB",
        Format: "pdf",
        Date: "2023-06-15"
    },
    {
        Description: "File16",
        Size: "4.6 MB",
        Format: "mp3",
        Date: "2023-06-16"
    },
    {
        Description: "File17",
        Size: "3.9 MB",
        Format: "pptx",
        Date: "2023-06-17"
    },
    {
        Description: "File18",
        Size: "2.2 MB",
        Format: "xlsx",
        Date: "2023-06-18"
    },
    {
        Description: "File19",
        Size: "7.1 MB",
        Format: "pdf",
        Date: "2023-06-19"
    },
    {
        Description: "File20",
        Size: "1.9 MB",
        Format: "jpg",
        Date: "2023-06-4"
    }
]


const pageHeader = {
    title: 'Policies-and-Strategies',
    subheader: 'Read Policies-and-Strategies Files'
}
function PoliciesAndStrategies() {

    const [page, setpage] = useState(1)
    const path = [{name: 'Home', link: ''},{name:'Policies-and-Strategies'}]

    const pageSize = 8
    const totalPages = FileList.length%pageSize != 0 ? Math.floor(FileList.length / pageSize) + 1 : Math.floor(FileList.length / pageSize)

    const paginatedData = FileList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
    return (
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <ResoucesTable paginatedData={paginatedData} pageHeader={pageHeader} totalPages={totalPages} setpage={setpage} page={page} />

        </>
    )
}

export default PoliciesAndStrategies

