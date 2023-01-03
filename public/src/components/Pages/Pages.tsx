import {Works} from './Works';
import {About} from './About';
import {Contact} from './Contact';

export const Pages = (props: {pageName: string;}) => {
    const page = props.pageName;
    switch (page) {
        case "works":
            return <Works />;
        case "about":
            return <About />;
        case "contact":
            return <Contact />;
        default:
            return <></>;
    }
};

type JobDescription = {
    id: string,
    company: string,
    startAt: string,
    endAt?: string,
};
