Contributing Guide
===================================================================================== 

♥ [Vue Foundation Components](https://github.com/sirthxalot/vue-foundation-components) 
and want to get involved? Thanks, there are many ways you can help!

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.


## Using the Issue Tracker

The [issue tracker](https://github.com/sirthxalot/vue-foundation-components/issues) is
the preferred channel for [bug reports](#bugs), [features requests](#features)
and [submitting pull requests](#pull-requests), but please respect the following
restrictions:

* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.

* Please **do not** open issues or pull requests regarding the code in Third 
  Party Modules - (open them in their respective repositories).


<a name="bugs"></a>
## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; ideally create a [reduced test
   case](https://css-tricks.com/reduced-test-cases/) and a live example.

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? What would you expect to be the outcome? All these
details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).


<a name="features"></a>
## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.


<a name="pull-requests"></a>
## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Please adhere to the coding conventions used throughout a project (indentation,
accurate comments, etc.) and any other requirements (such as test coverage).

Adhering to the following process is the best way to get your work
included in the project:

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your
   fork, and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/vue-foundation-components.git
   # Navigate to the newly cloned directory
   cd /vue-foundation-components
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/sirthxalot/vue-foundation-components.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/about-git-rebase/)
   feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.

**IMPORTANT**: By submitting a patch, you agree to allow the project
owners to license your work under the terms of the [MIT License](license.md).

<a name="gitflow"></a>
## The Gitflow Workflow

![Preview: GitFlow](https://www.atlassian.com/git/images/tutorials/collaborating/comparing-workflows/gitflow-workflow/01.svg)

The Gitflow Workflow defines a strict branching model designed around the project 
release. While somewhat more complicated than the [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), 
this provides a robust framework for managing larger projects.

This workflow doesn’t add any new concepts or commands beyond what’s required for 
the Feature Branch Workflow. Instead, it assigns very specific roles to different 
branches and defines how and when they should interact. In addition to feature 
branches, it uses individual branches for preparing, maintaining, and recording 
releases. Of course, you also get to leverage all the benefits of the Feature 
Branch Workflow: pull requests, isolated experiments, and more efficient 
collaboration.

### Historical Branches

Instead of a single `master` branch, this workflow uses two branches to record the 
history of the project. The `master` branch stores the official release history, and 
the `develop` branch serves as an integration branch for features. It's also convenient 
to tag all commits in the master branch with a version number.

![Historical Branches](https://www.atlassian.com/git/images/tutorials/collaborating/comparing-workflows/gitflow-workflow/02.svg)

The rest of this workflow revolves around the distinction between these two branches.

### Feature Branches

Each new feature should reside in its own branch, which can be [pushed to the central 
repository for backup/collaboration](https://www.atlassian.com/git/tutorials/syncing/git-push). 
But, instead of branching off of `master`, feature branches use `develop` as their parent 
branch. When a feature is complete, it gets [merged back into `develop`](https://www.atlassian.com/git/tutorials/using-branches/git-merge). 
Features should never interact directly with `master`.

![Feature Branches](https://www.atlassian.com/git/images/tutorials/collaborating/comparing-workflows/gitflow-workflow/03.svg)

Note that feature branches combined with the `develop` branch is, for all intents and 
purposes, the Feature Branch Workflow. But, the Gitflow Workflow doesn’t stop there.

### Release Branches

![Release Branches](https://www.atlassian.com/git/images/tutorials/collaborating/comparing-workflows/gitflow-workflow/04.svg)

Once `develop` has acquired enough features for a release (or a predetermined release 
date is approaching), you fork a release branch off of `develop`. Creating this branch 
starts the next release cycle, so no new features can be added after this point—only 
bug fixes, documentation generation, and other release-oriented tasks should go in 
this branch. Once it's ready to ship, the release gets merged into `master` and tagged 
with a version number. In addition, it should be merged back into `develop`, which may 
have progressed since the release was initiated.

Using a dedicated branch to prepare releases makes it possible for one team to polish 
the current release while another team continues working on features for the next 
release. It also creates well-defined phases of development (e.g., it‘s easy to say, 
“this week we’re preparing for version 4.0” and to actually see it in the structure 
of the repository).

Common conventions:

* branch off: `develop`
* merge into: `master`
* naming convention: `release-*`

### Maintenance Branches

![Maintenance Branches](https://www.atlassian.com/git/images/tutorials/collaborating/comparing-workflows/gitflow-workflow/05.svg)

Maintenance or “hotfix” branches are used to quickly patch production releases. 
This is the only branch that should fork directly off of `master`. As soon as the fix 
is complete, it should be merged into both `master` and `develop` (or the current release 
branch), and `master` should be tagged with an updated version number.

Having a dedicated line of development for bug fixes lets your team address issues 
without interrupting the rest of the workflow or waiting for the next release cycle. 
You can think of maintenance branches as ad hoc release branches that work directly 
with `master`.

> "That's all Folks - Happy coding!"
