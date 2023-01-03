import {useEffect, useState} from 'react';

export const About = () => {
    const [state, setState] = useState([{company: "", description: ""}]);
    useEffect(() => {
        // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
        const access_db = async () => {
            const response = await fetch("http://127.0.0.1:5001/portfolio-8cf27/us-central1/api/job-descriptions");
            const body = await response.json();
            setState(body);
        };
        access_db();
    }, []);
    const list = state.map((job) =>
        <section key={job.company}>{/* IDをキーにすべき */}
            <h2>{job.company}</h2>
            <p>{job.description}</p>
        </section>
    );
    return (
        <div className='main'>
            {list}
        </div >
    );
};
