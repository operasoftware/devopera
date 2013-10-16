Title: The freelancing business part 3: scheduling your projects
----
Date: 2009-08-06 15:04:12
----
Lang: en
----
Author: 
----
License: Creative Commons Attribution, Non Commercial - Share Alike 2.5
----
License_url: http://creativecommons.org/licenses/by-nc-sa/2.5/
----
Text:

<ul class="seriesNav">	
<li class="prev"><a href="http://dev.opera.com/articles/view/the-freelancing-business-part-2-budgeti/" rev="prev" title="link to the previous article in the series">Previous article&#8212;The freelancing business part 2: budgeting your projects</a></li>
</ul>

<h2>Introduction</h2>
<p>Previously in this article series, we discussed <a href="http://dev.opera.com/articles/view/the-freelancing-business-part-2-budgeti/">budgeting</a> and <a href="http://dev.opera.com/articles/view/the-freelancing-business-part-1-pricing/">pricing</a>; in this third article we carry on the discussion about making money as a freelancer, covering the role and importance of schedules in profitability.</p>


<h2>What is Scheduling?</h2>

<p>Scheduling is the process of creating and maintaining schedules. Schedules map tasks (things to do) and resources (people to do those things) against time on a calendar. Schedules bring order to the planning and execution of any project, and provide you with information that allows you to increase your control over whether a project is profitable or not.</p>

<p>On one level, of course, scheduling is a simple concept. We have things to do, and only a limited number of hours in a day, so let&#39;s plot those things (or &#39;tasks&#39;) on a calendar, and - voila! - we have our schedule!</p>

<p>But in the context of our discussion, that just scrapes the surface. In real-world project development - even when you&#39;re a freelancer working alone - schedules aren&#39;t just used to determine what you&#39;ll work on today. The process of scheduling is fundamental because it helps us answer several very important questions, as we&#39;ll shortly address.</p>

<p>Just as a project specification provides significant detail on the functional performance requirements of our project (the individual features required in the application), a schedule provides that same type of detail on how the project is executed - the individual tasks that are required to build the application. Once your schedule is complete, you should know, with as much specificity as possible, which tasks are required from which resources on which days, for the duration of a project.</p>

<p>By outlining these tasks, you can determine realistic deadlines, evaluate the relative priority of individual tasks and features, and define dependencies (what other tasks must be completed before starting a given task). Maintaining this schedule of tasks throughout the project allows you to adjust your deadlines in advance, given unpredictable events (a client misses a deadline; a blizzard knocks out internet for all your developers for two days, etc.), enabling you to control expectations in advance, and increase charges when appropriate.</p> 

<p>The more clarity and detail you have in your schedule, the more likely you are to run a profitable, low-stress project that is completed on-time - and the earlier in the process you will know if the project is trending off-course. In the absence of an accurate or sufficiently detailed project schedule, it is entirely possible to obligate yourself to deadlines that you do not realize are unrealistic and miss deadlines without advance notice.</p>

<h2>Types of Schedules</h2>

<p>There are, of course, many types of schedules. But in my estimation, in the world of service work (the type of work we all do - where we earn money based on each hour we work), there are two broad types of schedules: task-based and resource-based. These account for the two broad ways in which projects are conducted in our industry: waterfall and agile  (these broad, general groupings are applied for convenience, as more or less any software development workflow can be categorized under one or the other).</p>

<p>The waterfall project model (<a href="http://en.wikipedia.org/wiki/Waterfall_model">Wikipedia entry for &#39;Waterfall Model&#39;</a>) defines structured, consecutive project phases. For example, you first define the requirements, then move into a full design phase, then implement (or &#39;produce&#39;, or &#39;engineer&#39;) the design, verify the end result, deliver it and enter into maintenance. The agile model (<a href="http://en.wikipedia.org/wiki/Agile_software_development">Wikipedia entry for &#39;Agile Software Development&#39;</a>) was created to support a less structured, more <em>agile</em> way of producing projects in an iterative manner, in which definitions, features, designs and requirements can change throughout the project.</p>

<p>In those projects I group under the broad term of waterfall, the tasks are fixed, and then you apply the necessary resources to hit your deadlines (functional requirements are fixed, and resources are variable). Such projects more readily conform to task-based schedules. In those projects that fall more under the Agile model, resources are fixed, and then you determine what tasks you can take on (the resource calendars are fixed, and the functional requirements can vary). Such projects often follow resource-based schedules. Both types of schedules have benefits and drawbacks.</p>

<p>In task-based schedules, you need a pretty accurate list of tasks in order to derive the schedule. That means you need to put a lot of thought, up-front, in to exactly what tasks are required to build the project - including the dependencies of these tasks (for example, &#39;configure server&#39; must be executed before &#39;install Drupal&#39;). Such task-based schedules are commonly applied to waterfall-style projects, where detailed specifications are authored prior to execution of production labor. It is also generally easier to sell projects in this manner, because your clients have a definite, guaranteed feature-list prior to production (again, because the specification is defined in detail prior to building the software).</p>

<p>In resource-based schedules, you have a list of resources - generally people, for example designers and developers and QA testers and project managers and so forth. Then you place those resources on calendar, and say &#39;you have resources X, Y and Z for 3 weeks, and resources P, Q and R for 6 weeks&#39;. The key benefit here is that you can start your production more rapidly, based on a less detailed project specification - and you don&#39;t have to invest the effort into planning documentation. It is for this reason that such schedules are more appropriate for Agile-style projects, where complete documentation is the result of, not the precursor to, production. The trade-off is that there is (in my opinion) significantly more project management overhead for the duration of the project; the project specification (which is more or less sealed prior to production under waterfall) is in constant flux, and tasks and requirements must constantly created, modified, assigned, and re-assigned.</p>


<h2>Scheduling tools</h2>

<p>Later in this article, as I discuss the process of creating and updating your project schedules, I will assume the use of software for the task. There are a class of project management tools, but many people prefer using spreadsheets for the task, so here I outline a few options of both types.</p>

<h3>Spreadsheets</h3>

<p>There are several popular spreadsheet programs available, including Microsoft <a href="http://office.microsoft.com/en-us/excel/default.aspx">Excel</a> (PC and Mac), Apple <a href="http://www.apple.com/iwork/numbers/">Numbers</a> (Mac), <a href="http://www.openoffice.org/">OpenOffice</a> (free for PC, Mac, Linux and UNIX), and <a href="http://docs.google.com/">GoogleDocs</a> (browser-based, cross-platform). And all offer the same core functionality. </p>

<p>Spreadsheet programs are an invaluable tool for any variety of data representation and calculations. But in terms of project management, they only get you so far. Spreadsheets are good for handling resource-based scheduling, and they are also useful on simple projects, or projects requiring only a few resources. But on task-based projects, with multiple resources, spreadsheets are only useful for ball-park estimations; spreadsheet tools lack several of the core features that are standard in project management tools (described below).</p>

<p>With that disclaimer, I want to encourage as many freelancers as possible to start using spreadsheets for project planning. Because many of you will not move to project management tools until you start taking on more responsibility on larger-scale projects, in the interim you should feel comfortable using spreadsheets (which are, in truth, amazingly flexible and powerful) to help you plan your projects.</p>

<p>Because spreadsheets are so flexible, there is really no fixed or set way to use them to help you manage your project schedules. In this context, you should think of a spreadsheet as a blank project calculator that you can build from the ground up, to help you track and calculate whatever data your specific project requires.</p>

<h3>Project planning tools</h3>

<p>While spreadsheets are useful, they will only get you so far - they lack some key features that make project planning much easier. There is a wide array of project management tools available for purchase (I have yet to find a suitable one for free), for desktop and for web.</p>

<p>The industry-standard in software and interactive is <a href="http://office.microsoft.com/en-us/project/default.aspx">Microsoft Project</a>, which is an incredibly powerful tool. However, there is no version for Mac. If you are on a Mac, you have options that include <a href="http://www.projectwizards.net/en/merlin/">Project Wizards Merlin</a> (which is roughly of the same complexity and power as Microsoft Project), and <a href="http://www.omnigroup.com/applications/omniplan/">OmniGroup OmniPlan</a> (which is much simpler, and less expensive, but with much of the same functionality). There are, I should note, a large number of web-based project management tools, as well (such as <a href="http://www.projectinsight.net/">Project Insight</a>), which bring similar project planning functionality to the browser. Because of platform, simplicity and cost, we have standardized around OmniPlan at my company, <a href="http://www.almerblank.com">Almer/Blank</a>.</p>

<p>All project management tools share the same core concepts - a set of data structures and calculation features specific to the needs of schedule management. All of these tools have features that go far beyond these items, but these are the core concepts shared by all of these tools, and the ones that you should understand in order to use any of these tools. These include:</p>

<h4>Data Structures:</h4>

<ul>
<li><p><strong>Tasks</strong>: Something that must be done. Most commonly, tasks are assigned to resources (defined immediately below). A task can be shared by multiple resources (such as if an engineering feature requires two developers instead of just one)</p> 

<p>Most tasks take time, and you can estimate that time (also known as &#39;effort&#39;) when creating the task. If a task does not take time, it is known as a &#39;milestone&#39;, which is a type of task that represents a goal that must be met (such as the task in your schedule for the client to approve a deliverable)</p></li> 

<li><p><strong>Resources</strong>: Someone (such as a developer), or something (such as a sound recording booth), that is required to execute tasks</p></li>

<li><p><strong>Calendars</strong>: Represents the availability of resources, including how many hours in a week these resources can work, and when those hours will occur (such as &quot;developer x works 9AM to 5PM - with one hour for lunch, Mondays, Wednesdays and Thursdays, for a total of 21 hours of work each week&quot;</p></li>

<li><p><strong>Dependencies</strong>: Represents the relationship of two separate tasks. There are different types of dependencies. The most common is &#39;Finish-To-Start&#39; (or, &#39;FS&#39;). If you specify task Y as having a finish-to-start dependency on task X, then task X must be completed before task Y can begin (and, relatedly, if task X is late, task Y will also be delayed). Other types of dependencies include Start-to-Start (or SS, in which both tasks must start at the same time -- neither can start until both can start) and Finish-to-Finish (or FF, in which both tasks must end at the same time -- neither can be considered complete until both are complete). There is also Start-to-Finish (or SF), which is the opposite relationship of FS (meaning, if task Y has an FS dependency on task X, then task X has an SF dependency on task Y)</p> 

<p>In all cases, if two tasks have a dependency, unless otherwise specified, there is assumed to be no lag. So, if task Y has an FS dependency on task X, then task Y can begin as soon as task X is complete. Sometimes, however, you need to anticipate a delay. For instance, if you need to test a new website at the correct URL, the testing task is dependent on the task of pointing the domain name to the right IP address (through, for example, GoDaddy), a process which might take up to two days. In this case, the testing task has a finish-to-start dependence on the domain change, with a two-day lag. So, you might write that it has an &#39;FS +2&#39; dependence. You can also have negative lags. For example, if task Y has an &#39;FS -3&#39; dependence on task X, then task Y will begin three days before task X is complete</p></li>
</ul>

<h4>Functions:</h4>

<ul>
<li><p><strong>Leveling</strong>: Leveling is an amazing feature that greatly eases the process of schedule management. If you can think of the process of setting up all your data (the concepts defined immediately above) as akin to gathering ingredients and writing up a recipe, then you can think of leveling as an automated chef. Leveling takes all your ingredients (the tasks, with their estimated effort, assigned resources, and interdependencies, and the project and resource calendars) and generates realistic dates for all tasks. It is called leveling because it is like taking a knife to icing on a cake, smoothing the assignments across the entire project plan - ensuring, for example, that no resource is assigned to work 30 hours in a single day</p></li>

<li><p><strong>Baselining</strong>: Schedules are not only created, but maintained. Even under master project managers, overseeing skilled experienced teams, no project schedule ever proceeds 100% according to plan. So, as you maintain a schedule, it will deviate from your initial estimates and assumptions. If, throughout the project life cycle, you wish to understand the precise source of the discrepancies between your estimates and your actuals (that is, which tasks are taking more or less time than anticipated), you will want to establish a baseline for your project</p>

<p>Baselining your schedule is sealing a draft of your schedule -- akin to turning on &#39;track changes&#39; in Microsoft Word. So that as you continue to edit and modify the schedule throughout the project, you can see the precise differences between what you thought would happen, and what is actually happening</p></li>
</ul>


<h2>Building and Maintaining Schedules</h2>

<h3>Creating a Schedule</h3>

<p>There is no fixed way to create a schedule. The schedule creation process will depend entirely on the specific requirements of your project - at Almer/Blank, we create schedules in multiple ways, depending on the individual nature of the project. And this is another way of saying that the process of creating a schedule is a meditation on the project. Having to author a schedule forces you to consider the various aspects of the project context, to consciously determine the appropriate model for a project, and to ensure the feature scope, deadlines and budgets are realistic. </p>

<h3>Creating a Task-Based Schedule</h3>

<p>Creating a task-based schedule is necessarily an involved process, as it requires you to think through the project in detail, up-front. Because of the complexity, in this description, I will assume you are using a project management tool rather than a spreadsheet program to author your schedule.</p>

<p>The basis for a task-based schedule is a detailed project specification (you should only ever take on fixed-fee work if there is a detailed project specification; otherwise, you should work on time and materials, or proceed with a resource-based schedule). Without a detailed document defining each aspect of the project being executed, creating an accurate schedule is impossible - the best you can do is estimate, based on past experience. Of all the materials we generate and use in a project, the schedule is often the only comprehensive list of all tasks on a project. So, authoring the schedule is usually the only the opportunity we have to analyze the comprehensive list of tasks. This, in turn, is important because analyzing the entire list of tasks at once is the best way to reveal dependencies, that is, which tasks can not start without other tasks first being completed.</p>

<p>Any task-based schedule has the key ingredients of tasks, dependencies, resources, and time. As described above, The relationship of these ingredients is that: <strong>resources</strong> perform <strong>tasks</strong> in <strong>time</strong>, constrained by <strong>dependencies</strong>.</p>

<p>First, you will wish to break the project down into top-level phases (or task groups), which might include items such as &#39;Discovery&#39; or &#39;Wireframing&#39; or &#39;Graphic Design&#39; or &#39;Engineering&#39; or any number of other various categories, which depend on the specific work you are doing and the process you are following. The next step is to define the tasks for each phase. You should be able to generate the list of tasks directly from the project specification.</p> 

<p>Even with a detailed project specification, the process of generating a list of required tasks can be challenging, and you will often wonder whether you are applying sufficient detail in your breakdown. The more refined a list of tasks you can create, the better, since it gives you the opportunity to think over each aspect of the project in detail, and establish the inter-dependencies between these tasks. But, you should only break down tasks with the degree of detail you feel is required to properly understand and track the work that must be done. As long as you can accurately account for the work that must be done, and understand all the important dependencies, you&#39;ve covered the basics.</p> 

<p>There will often be occasions in which some of your resources will need to work, but not on the type of tasks that might be represented in a project plan. Some examples are the Project Manager, Producer or Account Manager. You might sometimes hear the phrases &#39;above-the-line&#39; and &#39;below-the-line&#39; (terms taken from Hollywood&#39;s movie making operational model) - and while &#39;below-the-line&#39; talent, like an engineer, can be readily assigned to tasks, &#39;above-the-line&#39; talent, like an account manager, can not. But, of course, their hours are still valuable and billable. So, to calculate the labor requirements of &#39;above-the-line&#39; resources like project managers, we use a formula (say, 30% of the total hours of the &#39;below-the-line&#39; talent whom the project manager manages), and then create a blanket task &#39;Project Manager Allocation&#39;, reflecting those hours.</p>

<p>With your list of tasks, you then proceed to estimate effort for each of those tasks (or, alternatively, set them as milestones), and assign the resources responsible for each task. Once that is complete, you can level your project.</p>

<p>While you will often view your project plan as a table similar to one you might create in a spreadsheet program, one benefit of using project management tools is the ability to view your project as a Gantt chart (<a href="http://en.wikipedia.org/wiki/Gantt_chart">Wikipedia entry for &#39;Gantt chart&#39;</a>), which is a visual summary of tasks, along with their dates and dependencies.</p>

<p>Sometimes, your project will look good after the first level, but often you will not be able to make your target dates with the initial draft (you compare the dates of your milestones, against the dates your client has requested, for example). In this case, you need to alter your assumptions as appropriate (for example, re-assigning certain tasks, reducing some turn-around times, removing some features, or moving deadlines), and then re-level.</p>

<p>This process requires the confidence to make a tremendous number of assumptions and guesses (after all, you are trying to plan out an entire project) on a wide variety of questions, including the effort required for each task, who will execute the work, inter-task dependencies, when third parties will be able to provide key deliverables, and many more.</p> 

<p>You must be comfortable making assumptions, otherwise you will be paralyzed, and unable to complete the process. It can be incredibly and painfully easy to spend far too much time worrying if task X is going to take four hours or seven hours. While you of course want your schedules to reflect accurate assumptions, you should not over-think:</p>

<ol>
  <li>There will be variances throughout the project - even on items that you didn&#39;t think were guesses - and so you must be prepared to handle variances anyway</li>
  <li>You will get better at guesswork over time</li>
  <li>The purpose of a schedule is to get a realistic benchmark, not the absolute truth, so four hours instead of seven is not the end of the world (see the note on Buffering, below)</li>
  <li>Odds are, your mistakes will go a good deal towards canceling each other out. So, for example, task X might take seven hours instead of the estimated four, but task Q ended up being totally unnecessary, saving three hours, netting your variance out to zero in this simplified example.</li>
</ol>

<p>Again, the point is to make best guesses (which will improve in quality over time) and not to author the definitive truth. The only time a schedule is ever 100% accurate is when the project is over.</p>

<p>A key part of this process - and one skipped at many companies - is to review the assumptions in your schedule with all relevant stakeholders (the people involved, with a stake in the project). You should sit down with all team-members and the client and ask questions such as such as &#39;is four hours realistic for this task?&#39;, &#39;can you make these deadlines and turnaround times?&#39; and &#39;do you see any missing dependencies?&#39;. Their input will be very helpful in refining your draft plan into a more accurate schedule. And once you are complete drafting the schedule, you can seal the baseline.</p>

<p>So, the process of authoring a task-based schedule, while not easy, is simply described as follows:</p>


<ol>
<li>List all resources, along with their accurate work schedules</li>
<li>List all tasks
<ul>
  <li>Estimate effort</li>
  <li>Assign the task to a resource(s)</li>
  <li>Estimate dependencies</li>
</ul>
</li>
  <li>Level</li>
  <li>Review with stakeholders</li>
  <li>Update &amp; re-level</li>
  <li>Establish the baseline</li>
</ol>

<p>As a sample, I have authored a broad project plan for a moderately complex project, involving eight resources (as well as placeholders for the client, ACME Corporation, and us, Almer/Blank, so that delivery milestones might be assigned to firms, rather than individuals). The tasks are grouped into phases (such as &#39;Project Requirements Definition&#39; and &#39;Interaction Design&#39;) and the phases are grouped into what we term chapters (&#39;Discovery&#39;, &#39;Design&#39; and &#39;Production&#39;). Many of the tasks, task groups, and phases have dependencies (for example, Information Design can begin only once the Product Requirements Document has been finalized). Then the tasks are assigned to the resources who must carry them out. And finally the plan is leveled and the baseline established – <a href="TasksAndTime.html">check out my sample taskplan</a>.</p>


<p>This sample plan is typical of one that we would author at the start of the project, and thus effort is greatly simplified. For example, under Beta &gt; Engineering, you will see that &#39;Engineering&#39; is a single line item scoped to 100 hours; in this example, the actual individual beta engineering tasks would be defined, and inserted into the project plan, following the software design phase.</p>

<p>We use OmniPlan for our project plans, but all of the major project management tools available contain convenient export functionality, so that plans can be converted to CSV, XML or MSProject files, or HTML summary output (you can <a href=" sampleTaskPlan_20090707_c.zip">download a full project plan sample package</a> and check it out, or check out an <a href="sampleTaskPlan_20090707_c.omniplan.zip">OmniPlan version of the plan</a>).</p>


<p>You can also generate bitmap snapshots of the Gantt chart of the project plan, as indicated in Figure 1.</p>

 
<a href="gantt.html"><img src="http://forum-test.oslo.osa/kirby/content/articles/279-the-freelancing-business-part-3-scheduling-your-projects/image002.gif" alt="gantt chart" /></a>
<p class="comment">Figure 1: A Gantt chart of our sample project (click the image for a much larger version).</p>


<h3>Maintaining a Task-Based Schedule</h3>

<p>Because so much effort went into authoring the project plan, as long as it is realistic and there are no significant changes, maintenance is a relatively easy task. Simply update the &#39;actuals&#39; - the data representing the actual way the project has proceeded (as opposed to the estimations you applied up-front). You will enter actual data for hours worked, percent complete, and start and end dates. If you want to track deviations in detail, be sure that you have set your baseline before updating any values.</p>

<p>If changes in the project require that tasks be added, removed, or re-assigned, or that task dependencies be altered, you may do so in your project plan as needed. Once complete, you will need to re-level, to view the impact of these changes on your deadlines.</p>

<h3>Creating a Resource-Based Schedule</h3>

<p>Creating a resource-based schedule is, in many ways, much easier than creating a task-based schedule. However, this process requires different skills. First, you must be able to gauge required resources (such as roughly how many developer hours are needed) from a vague or incomplete specification. And second, once the project is in motion, you must constantly update the specification and resource assignments.</p>

<p>The basis for a resource-based schedule is some sort of feature-list. Even though a detailed specification is likely absent, you still need to gauge, from a top-level, the broad requirements of the project. From this top-level feature list, you will need to estimate the required efforts of the various resources on a project (which could include roles such as project manager, producer, software architect, engineers, visual designers, user experience designers, production designers, information architects, QA testers, and others). Once you&#39;ve done that, however, the job of creating the schedule is easy, because you can simply plot those out on a calendar - for example, 3 engineers for three weeks at 30 hours a week, a visual designer for 2 weeks at 40 hours a week, and so forth. A resource-based schedule often completely lacks any indication of tasks and assignments - it is reflective simply of availability.</p>

<p>I&#39;ve authored a simple example of a resource-based plan spanning nine weeks with three milestones - each occurring during a &#39;pink&#39; week – see Figure 2. At the start of the project, based on initial discussions of scope (and, perhaps, following a separate Discovery project, in which the project requirements and goals are established), I sit down and make assumptions about which resources are needed (in this case, seven of them), and what their weekly allocations will be (you could take this down to the daily level if you want to). The result is the number of hours required from each resource, each week, and the total number of hours available to execute the project.</p>

<table width="100%" border="1">
  <tr>
    <th scope="col">Resource</th>
    <th scope="col">1</th>
    <th scope="col">2</th>
    <th scope="col">3</th>
    <th scope="col">4</th>
    <th scope="col" style="background-color:pink;">5</th>
    <th scope="col">6</th>
    <th scope="col" style="background-color:pink;">7</th>
    <th scope="col">8</th>
    <th scope="col" style="background-color:pink;">9</th>
    <th scope="col">T</th>
  </tr>
  <tr>
    <td>Producer</td>
    <td>32</td>
    <td>32</td>
    <td>40</td>
    <td>40</td>
    <td style="background-color:pink;">40</td>
    <td>30</td>
    <td style="background-color:pink;">30</td>
    <td>20</td>
    <td style="background-color:pink;">20</td>
    <td>284</td>
  </tr>
  <tr>
    <td>Project Manager</td>
    <td>40</td>
    <td>40</td>
    <td>40</td>
    <td>40</td>
    <td style="background-color:pink;">40</td>
    <td>40</td>
    <td style="background-color:pink;">40</td>
    <td>40</td>
    <td style="background-color:pink;">40</td>
    <td>360</td>
  </tr>
  <tr>
    <td>User Experience Designer</td>
    <td>40</td>
    <td>40</td>
    <td>20</td>
    <td>16</td>
    <td style="background-color:pink;">16</td>
    <td>8</td>
    <td style="background-color:pink;">8</td>
    <td>8</td>
    <td style="background-color:pink;">0</td>
    <td>156</td>
  </tr>
  <tr>
    <td>Software Architect</td>
    <td>40</td>
    <td>40</td>
    <td>40</td>
    <td>40</td>
    <td style="background-color:pink;">40</td>
    <td>40</td>
    <td style="background-color:pink;">40</td>
    <td>40</td>
    <td style="background-color:pink;">40</td>
    <td>360</td>
  </tr>
  <tr>
    <td>Engineer 1</td>
    <td>40</td>
    <td>40</td>
    <td>40</td>
    <td>40</td>
    <td style="background-color:pink;">40</td>
    <td>40</td>
    <td style="background-color:pink;">40</td>
    <td>40</td>
    <td style="background-color:pink;">40</td>
    <td>360</td>
  </tr>
  <tr>
    <td>Engineer 2</td>
    <td>0</td>
    <td>10</td>
    <td>40</td>
    <td>40</td>
    <td style="background-color:pink;">24</td>
    <td>20</td>
    <td style="background-color:pink;">20</td>
    <td>20</td>
    <td style="background-color:pink;">20</td>
    <td>194</td>
  </tr>
  <tr>
    <td>QA</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>32</td>
    <td style="background-color:pink;">32</td>
    <td>32</td>
    <td style="background-color:pink;">32</td>
    <td>0</td>
    <td style="background-color:pink;">0</td>
    <td>128</td>
  </tr>
  <tr>
    <td colspan="10">Total Hours</td>
    <td><strong>1842</strong></td>
  </tr>
</table>

<p class="comment">Figure 2: A simple resource-based project plan.</p>

 

<h3>Maintaining a Resource-Based Schedule</h3>

<p>While authoring a resource-based schedule can be easy, maintaining a resource-based schedule is much more involved. It is less a matter of maintaining the schedule, than it is of maintaining the feature specification. Throughout the project, you must constantly update the project specification, to reflect the actual tasks that are being executed, and the features of the final deliverable in production. The schedule itself should not vary, unless the client decides to extend or reduce the engagement - so you must maintain vigilance over the progress and the specification, ensuring that features are removed as needed, in order to maintain the schedule.</p>

<p>In order to maintain vigilance over progress, you must be able to track the time and progress of your resources on their work. Which means you must still break the work into separate tasks, so you can see how much is being done. Since this task list is not reflected in the source schedule, a separate document must be created to track these items. And because they were not established up-front, they must be created and maintained in real-time, throughout the project. Often times this is done in another spreadsheet, or with a web-based time-tracking system (or, in some Scrum environments, on Post-It<sup>TM</sup> notes) - but it is a necessarily involved process (which is why some agencies who use systems like Scrum, offer training to their clients in how to work with it - because the on-going overhead requirements of such just-in-time production methodologies are so significant).</p>

<p>Following on the simple example above, each week the Project Manager tallies the actual hours, enters them into the spreadsheet. By the end of your project, you have the actual number of hours consumed on the project – see Figure 3.</p>


<table width="100%" border="1">
  <tr>
    <th scope="col">Resource</th>
    <th scope="col">1</th>
    <th scope="col">2</th>
    <th scope="col">3</th>
    <th scope="col">4</th>
    <th scope="col" style="background-color:pink;">5</th>
    <th scope="col">6</th>
    <th scope="col" style="background-color:pink;">7</th>
    <th scope="col">8</th>
    <th scope="col" style="background-color:pink;">9</th>
    <th scope="col">T</th>
  </tr>
  <tr>
    <td>Producer</td>
    <td>21.5</td>
    <td>38.9</td>
    <td>44.4</td>
    <td>37.8</td>
    <td style="background-color:pink;">37.9</td>
    <td>27.9</td>
    <td style="background-color:pink;">33</td>
    <td>16.8</td>
    <td style="background-color:pink;">17.2</td>
    <td>275.4</td>
  </tr>
  <tr>
    <td>Project Manager</td>
    <td>39.7</td>
    <td>51.5</td>
    <td>35.1</td>
    <td>44</td>
    <td style="background-color:pink;">36.1</td>
    <td>43.2</td>
    <td style="background-color:pink;">39.3</td>
    <td>44.9</td>
    <td style="background-color:pink;">41.6</td>
    <td>375.4</td>
  </tr>
  <tr>
    <td>User Experience Designer</td>
    <td>39.9</td>
    <td>34.4</td>
    <td>23.7</td>
    <td>20.4</td>
    <td style="background-color:pink;">16.8</td>
    <td>6.8</td>
    <td style="background-color:pink;">10.4</td>
    <td>8.6</td>
    <td style="background-color:pink;">3.9</td>
    <td>164.8</td>
  </tr>
  <tr>
    <td>Software Architect</td>
    <td>39.2</td>
    <td>33.5</td>
    <td>35.5</td>
    <td>35.9</td>
    <td style="background-color:pink;">41.7</td>
    <td>40.6</td>
    <td style="background-color:pink;">42.2</td>
    <td>44</td>
    <td style="background-color:pink;">36.3</td>
    <td>348.9</td>
  </tr>
  <tr>
    <td>Engineer 1</td>
    <td>32.5</td>
    <td>20.8</td>
    <td>38</td>
    <td>38.2</td>
    <td style="background-color:pink;">37</td>
    <td>37.7</td>
    <td style="background-color:pink;">44.7</td>
    <td>35.4</td>
    <td style="background-color:pink;">36.9</td>
    <td>321.3</td>
  </tr>
  <tr>
    <td>Engineer 2</td>
    <td>35</td>
    <td>19</td>
    <td>43.4</td>
    <td>39.8</td>
    <td style="background-color:pink;">25.9</td>
    <td>18.9</td>
    <td style="background-color:pink;">15.4</td>
    <td>22.5</td>
    <td style="background-color:pink;">18.3</td>
    <td>238.2</td>
  </tr>
  <tr>
    <td>QA</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>34.6</td>
    <td style="background-color:pink;">30.4</td>
    <td>36.1</td>
    <td style="background-color:pink;">29</td>
    <td>3.8</td>
    <td style="background-color:pink;">2.7</td>
    <td>136.4</td>
  </tr>
  <tr>
    <td colspan="10">Total Hours</td>
    <td><strong>1860</strong></td>
  </tr>
</table>

<p class="comment">Figure 3: Actual hours worked on a project.</p>



 

<p>Taking this one step further, you can simply subtract your actual hours from your planned hours, and see where all the deviations come from – see Figure 4. In this sample, I&#39;ve applied color-formatting rules to each cell to quickly indicate if the resource came in under or over hours for the week. In this example, while there was a lot of variation for each resource each week, overall, we came in 18 hours over budget (a negative variance of just under 1%, which is not too bad).</p>

<table width="100%" border="1">
  <tr>
    <th scope="col">Resource</th>
    <th scope="col">1</th>
    <th scope="col">2</th>
    <th scope="col">3</th>
    <th scope="col">4</th>
    <th scope="col" style="background-color:pink;">5</th>
    <th scope="col">6</th>
    <th scope="col" style="background-color:pink;">7</th>
    <th scope="col">8</th>
    <th scope="col" style="background-color:pink;">9</th>
    <th scope="col">T</th>
  </tr>
  <tr>
    <td>Producer</td>
    <td style="background-color:blue;color:white;">10.5</td>
    <td style="background-color:red;">-6.9</td>
    <td style="background-color:red;">-4.4</td>
    <td style="background-color:blue;color:white;">2.2</td>
    <td style="background-color:blue;color:white;">2.1</td>
    <td style="background-color:blue;color:white;">2.1</td>
    <td style="background-color:red;">-3</td>
    <td style="background-color:blue;color:white;">2.2</td>
    <td style="background-color:blue;color:white;">2.8</td>
    <td style="background-color:blue;color:white;">8.6</td>
  </tr>
  <tr>
    <td>Project Manager</td>
    <td style="background-color:blue;color:white;">0.3</td>
    <td style="background-color:red;">-11.5</td>
    <td style="background-color:blue;color:white;">4.9</td>
    <td style="background-color:red;">-4</td>
    <td style="background-color:blue;color:white;">3.9</td>
    <td style="background-color:red;">-3.2</td>
    <td style="background-color:blue;color:white;">0.7</td>
    <td style="background-color:red;">-4.9</td>
    <td style="background-color:red;">-1.6</td>
    <td style="background-color:red;">-15.4</td>
  </tr>
  <tr>
    <td>User Experience Designer</td>
    <td style="background-color:blue;color:white;">0.1</td>
    <td style="background-color:blue;color:white;">5.6</td>
    <td style="background-color:red;">-3.7</td>
    <td style="background-color:red;">-4.4</td>
    <td style="background-color:red;">-0.8</td>
    <td style="background-color:blue;color:white;">1.2</td>
    <td style="background-color:red;">-2.4</td>
    <td style="background-color:red;">-0.6</td>
    <td style="background-color:red;">-3.9</td>
    <td style="background-color:red;">-8.8</td>
  </tr>
  <tr>
    <td>Software Architect</td>
    <td style="background-color:blue;color:white;">0.8</td>
    <td style="background-color:blue;color:white;">6.5</td>
    <td style="background-color:blue;color:white;">4.5</td>
    <td style="background-color:blue;color:white;">4.1</td>
    <td style="background-color:red;">-1.7</td>
    <td style="background-color:red;">-0.6</td>
    <td style="background-color:red;">-2.2</td>
    <td style="background-color:red;">-4</td>
    <td style="background-color:blue;color:white;">3.7</td>
    <td style="background-color:blue;color:white;">11.1</td>
  </tr>
  <tr>
    <td>Engineer 1</td>
    <td style="background-color:blue;color:white;">7.5</td>
    <td style="background-color:blue;color:white;">19.3</td>
    <td style="background-color:blue;color:white;">2</td>
    <td style="background-color:blue;color:white;">1.8</td>
    <td style="background-color:blue;color:white;">3</td>
    <td style="background-color:blue;color:white;">2.3</td>
    <td style="background-color:red;">-4.7</td>
    <td style="background-color:blue;color:white;">4.6</td>
    <td style="background-color:blue;color:white;">3.1</td>
    <td style="background-color:blue;color:white;">38.7</td>
  </tr>
  <tr>
    <td>Engineer 2</td>
    <td style="background-color:red;">-35</td>
    <td style="background-color:red;">-9</td>
    <td style="background-color:red;">-3.4</td>
    <td style="background-color:blue;color:white;">0.2</td>
    <td style="background-color:red;">-1.9</td>
    <td style="background-color:blue;color:white;">1.1</td>
    <td style="background-color:blue;color:white;">4.6</td>
    <td style="background-color:red;">-2.5</td>
    <td style="background-color:blue;color:white;">1.7</td>
    <td style="background-color:red;">-44.2</td>
  </tr>
  <tr>
    <td>QA</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td style="background-color:red;">-2.6</td>
    <td style="background-color:blue;color:white;">1.6</td>
    <td style="background-color:red;">-4.1</td>
    <td style="background-color:blue;color:white;">3</td>
    <td style="background-color:red;">-3.8</td>
    <td style="background-color:red;">-2.7</td>
    <td style="background-color:red;">-8.4</td>
  </tr>
  <tr>
    <td colspan="10">Total Hours</td>
    <td><strong>1842</strong></td>
  </tr>
</table>

<p class="comment">Figure 4: The variance on our project – how the actual hours differ from our estimates.</p>


 



<h3>Buffering</h3>

<p>With any schedule, you will want to create some leeway - space in your planning to accommodate the surprises that inevitably await you. This helps maximize the chances that you can keep your promises. Which means accounting for uncertainty. In the context of schedules, accounting for uncertainty is primarily handled through a process called buffering. There are two very easy ways to do this.</p> 

<p>On task-based projects, one way to buffer is to buffer your dates. That is, if you&#39;ve filled out your schedule, and it says the work will be complete on March 15th, you can tell the client that it will be ready on March 22nd, giving yourself an extra week. This will help you deal with unforeseen events, such as server downtime, or another client calling you up with an emergency that takes you two days to resolve. Because you buffered your deadlines by a week you have time to handle all of this. And you might still have a little extra room to accommodate client change requests, and you might even deliver early! Another way to calculate a similar buffer in task-based projects is to reduce resource schedules. For example, if your team works 40 hours in a week, in the project plan you might indicate that these resources work 30 hours, creating a 25% buffer on deadlines.</p>

<p>On resource-based projects, since the resource calendars are fixed, and the tasks are variable, buffering occurs on the tasks. Instead of adding everything to the specification, you can create a list of &#39;nice-to-haves&#39; (or, roughly speaking, the &#39;backlog&#39; in Scrum-speak). This way, if you complete everything that is required, you can deliver on some extra features; but if some required features take more time than anticipated, you can drop those extras.</p>

<h3>The Relationship of Scheduling and Budgeting</h3>

<p>In this article, I&#39;ve covered the importance of scheduling primarily from the perspective of time - that is, representing accurate project timelines, and ensuring you hit your deadlines. Because we all work in service roles (again, because, roughly speaking, each dollar we make is due to an hour we worked), schedules directly inform budgets (which I addressed at greater length in my article, <a href="http://dev.opera.com/articles/view/the-freelancing-business-part-2-budgeti/">Budgeting Your Projects</a>).</p> 

<p>At the start of a project, with both task-based and resource-based schedules, as described above, you have a total number of hours to be worked by a list of resources. Simply multiply the number of hours each resource works by the cost of that resource (and account for other expenses, such as travel costs or software licensing fees) and you have your project budget. If the budget that flows from your schedule exceeds the available budget, then you know in advance that you need to trim features and resources.</p>

<p>In our task-based example, simply enter rates for each resource into the resource entry in the project management tool, as seen in this <a href=" sampleTaskPlan_20090707_c_costs.html">task-based costing page</a>. Let&#39;s assume for simplicity that everyone&#39;s rate is US$100 per hour, in which case our budget totals to $98,300. If we update our rates, resource assignments, or hours, the project cost will update automatically.</p>


<p>In our resource-based example, we can calculate the budget by multiplying each resources hours, by his rate. Let&#39;s assume for simplicity that everyone&#39;s rate is US$100 per hour, in which case our total budget is $184,200, as we can see in Figure 5:</p>

<table width="100%" border="1">
  <tr>
    <th scope="col">Resource</th>
    <th scope="col">1</th>
    <th scope="col">2</th>
    <th scope="col">3</th>
    <th scope="col">4</th>
    <th scope="col" style="background-color:pink;">5</th>
    <th scope="col">6</th>
    <th scope="col" style="background-color:pink;">7</th>
    <th scope="col">8</th>
    <th scope="col" style="background-color:pink;">9</th>
    <th scope="col">T</th>
  </tr>
  <tr>
    <td>Producer</td>
    <td>$3,200</td>
    <td>$3,200</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$4,000</td>
    <td>$3,000</td>
    <td style="background-color:pink;">$3,000</td>
    <td>$2,000</td>
    <td style="background-color:pink;">$2,000</td>
    <td>$28,400</td>
  </tr>
  <tr>
    <td>Project Manager</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$4,000</td>
    <td>$36,000</td>
  </tr>
  <tr>
    <td>User Experience Designer</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td>$2,000</td>
    <td>$1,600</td>
    <td style="background-color:pink;">$1,600</td>
    <td>$8,00</td>
    <td style="background-color:pink;">$8,00</td>
    <td>$8,00</td>
    <td style="background-color:pink;">0</td>
    <td>$15,600</td>
  </tr>
  <tr>
    <td>Software Architect</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$4000</td>
    <td>$36,000</td>
  </tr>
  <tr>
    <td>Engineer 1</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$4,000</td>
    <td>$36,000</td>
  </tr>
  <tr>
    <td>Engineer 2</td>
    <td>0</td>
    <td>$1,000</td>
    <td>$4,000</td>
    <td>$4,000</td>
    <td style="background-color:pink;">$2,400</td>
    <td>$2,000</td>
    <td style="background-color:pink;">$2,000</td>
    <td>$2,000</td>
    <td style="background-color:pink;">$2,000</td>
    <td>$19,400</td>
  </tr>
  <tr>
    <td>QA</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>$3,200</td>
    <td style="background-color:pink;">$3,200</td>
    <td>$3,200</td>
    <td style="background-color:pink;">$3,200</td>
    <td>0</td>
    <td style="background-color:pink;">0</td>
    <td>$12,800</td>
  </tr>
  <tr>
    <td colspan="10">Total Hours</td>
    <td><strong>$184,200</strong></td>
  </tr>
</table>

<p class="comment">Figure 5: Calculating the cost of all our resources.</p>

 

<p>Once a project is under way, maintaining the schedule is a process that proceeds hand-in-hand with protecting the budget. When you properly maintain a schedule during a project, it is easier to detect and understand variances earlier in the process, and if variances in the execution of a project are leading you to exceed your budget, you have more time in which to respond (perhaps by increasing the budget, or dropping other features, or eating into your planned profit).</p>

<p>In any case, a good schedule is essential to ensuring that you maintain your budgets and execute your projects profitably!</p>


<h2>Conclusion</h2>

<p>In this article I discussed the importance of proper schedules in profitability. I covered what scheduling is, the broad types of schedules, how to create and maintain project plans, available project management software, and the wisdom of buffering your plans. I ended by linking the schedule to the budget, which was covered in an earlier article.</p>

<p>Thus far in this series we have covered <a href="http://dev.opera.com/articles/view/the-freelancing-business-part-1-pricing/">pricing</a> and <a href="http://dev.opera.com/articles/view/the-freelancing-business-part-2-budgeti/">budgeting</a> and scheduling. Developing a sophisticated grasp of these topics (in addition to creating a good project specification document, which I consider to be more of a technical topic, rather than a business topic) is incredibly valuable in helping you to maximize your profitability.</p>

<p>In the next article I will begin to cover the importance of contracts in ensuring profitability. Your price, bid, budget and schedule all rely on a series of assumptions. You are responsible for, and in control of, some of those assumptions - other assumptions (such as turn-around times on client approvals, or access to the client&#39;s servers) are out of your control. Since many issues that are out of your control are vital factors in your profitability, you will need a way to enforce those assumptions (such as that your client promises to make all turn-around times in two days). And that&#39;s what contracts are for in this context -- to ensure everyone promises to do what is required to ensure the project gets done and you make a profit! Thus the remaining articles in this series of how to make money as a freelancer, will focus on ensuring that all your assumptions reflected in the budget and schedule are adhered to, and everyone plays fair.</p>

<ul class="seriesNav">	
<li class="prev"><a href="http://dev.opera.com/articles/view/the-freelancing-business-part-2-budgeti/" rev="prev" title="link to the previous article in the series">Previous article&#8212;The freelancing business part 2: budgeting your projects</a></li>
</ul>

