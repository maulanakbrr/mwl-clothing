// import CustomButton from '../../components/custom-button/custom-button.component';

import { SocmedInfoContainer, ButtonContainer, SocmedLink } from './socmed-info.styles';

const SocmedInfo = () => {
  return(
    <SocmedInfoContainer>
      <h3 className='text-center'>Connect with Us!</h3>
      <p className='text-center'>You can visit our instagram and shopee</p>
      <ButtonContainer className='text-center'>
        <SocmedLink isInstagram href="sss">
          Instagram
        </SocmedLink>
        <SocmedLink isShopee href="sss">
          Shopee
        </SocmedLink>
      </ButtonContainer>
    </SocmedInfoContainer>
  );
};

export default SocmedInfo;