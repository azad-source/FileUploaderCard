import styles from './FileUploaderCard.module.scss';
import React from 'react';
import {  FileUploader,  FileUploaderAttachedFile } from '@skbkontur/react-ui';

interface IProps {
  isSizeError?: boolean;
  disabled?: boolean;
  accept?: string;
  cardSize?: number;
  onAttache: (files: FileUploaderAttachedFile[]) => void;
}

export const FileUploaderCard: React.FC<IProps> = ({
  // isSizeError = false,
  disabled = false,
  accept,
  cardSize = 140,
  onAttache,
}) => {

  return (
    <FileUploader
      multiple
      hideFiles
      accept={accept}
      disabled={disabled}
      style={{ width: cardSize, height: cardSize }}
      className={styles.root}
      onAttach={onAttache}
    />
  );
};
