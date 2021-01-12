import {
  BreadcrumbContainer
} from './breadcrumb.styles';

const Breadcrumb = ({ children }) => {
  return(
    <div>
      <BreadcrumbContainer>
        { children }
      </BreadcrumbContainer>
    </div>
  );
};

export default Breadcrumb;