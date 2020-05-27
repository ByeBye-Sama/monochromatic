if [ "${CIRCLE_BRANCH}" != "master" ];
then
  npm run chromatic
else
  # We know any changes that make it to master *must* have been accepted
  npm run chromatic:ci
fi