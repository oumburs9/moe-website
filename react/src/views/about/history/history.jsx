import { useDispatch, useSelector } from 'react-redux';
import Side from '../../../components/side.component'
import { fetchHistories } from '../../../redux/about/history/historySlice';
import { useEffect } from 'react';
import Spinner from '../../../components/base/spinner';
import Titles from '../../../components/title.component';
import Breadcrumb from '../../../components/breadcrumb.component';

function History() {
  const { histories = [], loading, error } = useSelector(state => state.history);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHistories())
  }, [])

  const { title = '', paragraphs = [] } = histories[0] || []
  const path = [{name: 'Home', link: ''},{name: 'History', link: ''}]

  return (
    <>
      <nav>
        <Breadcrumb path={path} />
      </nav>
      {loading ? (
        <div className='flex items-center justify-center'>
          <Spinner className="w-16 h-16" />
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="grid md:grid-cols-3 bg-white p-8 gap-5 text-[#156584] my-[.67em]">
          <div className="md:col-span-2 pr-4">
            <Titles title={title} subtitle={''} />
            <div className='mt-[3em]'>
              {paragraphs.map(paragraph => (
                <>
                  <p>
                    {paragraph}
                  </p><br />
                </>
              )
              )}
            </div>
          </div>
          <div className="md:col-span-1 pl-4">
            <Side />
          </div>
        </div>
      )}

    </>
  )
}

export default History
