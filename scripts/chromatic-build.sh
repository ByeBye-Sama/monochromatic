if [ "${CIRCLE_BRANCH}" != "master" ];
then
  npm run chromatic
else
  npm run chromatic:ci
fi