import { useState } from "react"
import Titles from "../../components/title.component"
import { FileList } from "./policies-and-strategies"
import Breadcrumb from "../../components/breadcrumb.component"
import { ResoucesTable } from "./guidelines-and-standards"

const pageHeader = {
    title:'Plans And Reports',
    subtitle:'Read Plans and Report of Moe'
}
function PlansAndReports() {

    const path = [{name: 'Home', link: ''},{name:'Plans-And-Reports'}]
    const [page, setpage] = useState(1)

    const pageSize = 5
    const totalPages = FileList.length%pageSize != 0 ? Math.floor(FileList.length / pageSize) + 1 : Math.floor(FileList.length / pageSize)

    const paginatedData = FileList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
    return (
        <>
            <nav>
                <Breadcrumb path={path} />
            </nav>
            <ResoucesTable paginatedData={paginatedData} pageHeader={pageHeader} totalPages={totalPages} setpage={setpage} page={page}/>

        </>
    )
}

export default PlansAndReports