export type PictogramAction = {
  type: 'zoom-pictogram';
  payload: { value?: string };
};

export const displayImageZoomed = (value?: string): PictogramAction => ({
  type: 'zoom-pictogram',
  payload: { value },
});
