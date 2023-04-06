import PropTypes from 'prop-types';
import { PageContainerDiv } from "./pageContainer.styled";

export function PageContainer({children}) {
    return(
        <PageContainerDiv>
            {children}
        </PageContainerDiv>
    );
};






PageContainer.propTypes = {
    children: PropTypes.node,
};