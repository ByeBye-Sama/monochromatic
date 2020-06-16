if [ "${CIRCLE_BRANCH}" != "master" ];
then
  npx surge ./storybook-static -d https://$CIRCLE_PROJECT_REPONAME-$CIRCLE_BRANCH.surge.sh
else
  npx surge ./storybook-static -d https://$CIRCLE_PROJECT_REPONAME.surge.sh
fi