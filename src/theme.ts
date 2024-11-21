import { ThemeFactory, THEME_2022_UPDATE_2024 } from '@skbkontur/react-ui';
import { AddonsTheme } from '@skbkontur/react-ui-addons';
import { colors } from './variables';

const FILE_UPLOADER_THEME: Partial<AddonsTheme> = {
  fileUploaderBorderColor: colors.serviceColor,
  fileUploaderIconColor: colors.serviceColor,
  fileUploaderLinkColor: colors.serviceColor,
  fileUploaderHoveredBg: colors.surfacePrimaryBlue,
  fileUploaderHoveredBorderColor: colors.serviceColor,
  fileUploaderBorderColorFocus: colors.serviceColor,
  fileUploaderDragOverBorderColor: colors.serviceColor,
  fileUploaderDragOverShadow: `0px 0px 0px 3px ${colors.serviceColor}, 0px 0px 0px 8px ${colors.surfacePrimaryBlue}`,
};

export function createTheme(theme?: AddonsTheme) {
  return ThemeFactory.create(
    { ...FILE_UPLOADER_THEME, ...theme, sideMenuProductColor: '' },
    THEME_2022_UPDATE_2024
  );
}

export default createTheme();
