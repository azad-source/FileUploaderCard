import styles from './FileUploaderCard.module.scss';
import React from 'react';
import { FileUploader, FileUploaderProps } from '@skbkontur/react-ui';

interface IProps extends FileUploaderProps {
  cardSize?: number;
}

export const FileUploaderCard: React.FC<IProps> = ({ cardSize = 140, ...props }) => {
  const uploaderStyles: React.CSSProperties = { width: cardSize, height: cardSize };
  return <FileUploader {...props} style={uploaderStyles} className={styles.root} />;
};
