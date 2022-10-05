import React from 'react';
import PropTypes from "prop-types"
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { btnType } from '../../ts/types/type';

interface ButtonCmpProps {
  text: string;
  type: btnType;
  onClick: () => void;
  block?: boolean;
}

const ButtonCmp: React.FC<ButtonCmpProps> = ({ text, type, onClick, block }) => (
  <>
    <Button
      onClick={onClick}
      block={block && block}
      type={type}>
      {text}
    </Button>
  </>
);

ButtonCmp.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  block: PropTypes.bool
}

export default ButtonCmp;