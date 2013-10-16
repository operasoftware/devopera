Title: What's a browser Security Issue, anyway?
----
Date: 2011-11-24 11:02:56
----
Lang: en
----
Author: 
----
License: Opera Software ASA
----
License_url: http://www.opera.com
----
Text:

<div id="content">
<p>
 A large number of people are looking for security problems and
vulnerabilities in Opera and other applications.  Some people don&#39;t
like this, but I think it is actually fine.  When done
responsibly this can increase security for the application and is thus of
great benefit to the users. However, when done irresponsibly, the activity
can cause needless alarm and waste the time of the application vendors AND
the end users.
</p>
<p>
 One example of irresponsibility is how they report and
classify the issues they find, and how the issues are communicated to the
application vendor.
</p>
<p>
 The primary problems I see with some of the reporting is that:
</p>
<ul>
 <li>
  Many reports are about problems that may be bugs, but they are not
	really Security Issues
 </li>
 <li>
  Some reports exaggerate the severity of the problem
 </li>
 <li>
  Some reporters do not give us an opportunity to check the problem,
	verify that it is indeed a Security Issue, and release a patched version
	before they publish their findings.
 </li>
</ul>
<p>
 The terms &quot;Security Issue&quot; and &quot;Vulnerability&quot; cover a large number of
serious problems within an application.
</p>
<p>
 Security real-issues list:
</p>
<ul>
 <li>
  Makes the application reveal the user&#39;s protected information, such
	as filesystem info, username, passwords etc, without authorization.
 </li>
 <li>
  Makes the application mislead the user about what is going on
 </li>
 <li>
  Makes the application execute arbitrary code
 </li>
 <li>
  Attacks that permanently disable the application
 </li>
 <li>
  Uses weak protocols
 </li>
</ul>
<p>
 Those are just some of the possibilities. As important are what should NOT
be called a Security Issue.
</p>
<p>
 Security non-issues list:
</p>
<ul>
 <li>
  Crashes that do not prevent restart of the application
 </li>
 <li>
  That users are not able to access their online banking site,
shopping site, etc.
 </li>
 <li>
  That cookies do not work
 </li>
 <li>
  That the application uses stricter security protections than another competing application.
 </li>
</ul>
<p>
 Sometimes, some reporters wrongly classify instances from the non-issues
list as issues from the real-issues list.
</p>
<p>
 The two main severity concern prone to be exaggerated are allegations that
a problem &quot;can be used to execute arbitrary code&quot; or is a &quot;Denial of
Service&quot;-attack.
</p>
<p>
 It seems that the combination of a very large input and a crash leads some
people to automatically think the problem may be used to &quot;execute
arbitrary code&quot;, that is, take over the user&#39;s computer. That is not
always the case, and is usually only possible for what is called a stack
buffer overflow, even though it is also sometimes possible for heap
(allocated) buffer overflows. However, we have seen this phrase used even
for ordinary NULL pointer crashes that had no possibility whatsoever to be
abused.
</p>
<p>
 Another exaggeration is calling any crash that can be triggered by a
website a &quot;Denial of Service&quot;-attack. In my opinion, crashing a server can
rightly be called a Denial of Service as long as the server is not able to
automatically recover, because bringing down the server will deny service
to all users.
</p>
<p>
 Crashing a client, while it is an undesirable event, can only be achieved
by enticing the user into accessing a document that crashes the client,
and even then it will usually only inconvenience the user long enough to
restart the application. That is not sufficient cause to call it a Denial
of Service; in most of these cases it is a stability issue.
</p>
<p>
 The only way, in my opinion, that a crash in a client can be called a
denial of service is if the attack causes the client to crash again when
it is restarted, and when fixing the problem requires more than changing
the immediate startup configuration (previous session or blank page),
requiring editing configuration files or complete reinstallation.
</p>
<p>
 In my opinion, calling a normal crash problem in a client a &quot;Denial of
Service&quot; vulnerability is a devaluation of the meaning of the term &quot;Denial
of Service&quot;, which eventually may rob it completely of its correct
meaning, much in the same way that the word &quot;hacker&quot; is now considered to
mean &quot;computer criminal&quot;,  not &quot;highly skilled computer specialist&quot;, which
was its original meaning.
</p>
<p>
 One might even ask if an attack that disables the client really is a
security problem. After all, it does not compromise the user&#39;s information
security or privacy, or the system&#39;s integrity.
</p>
<p>
 Other browser developers have also seen this kind of exaggeration, and
 <a href="http://weblogs.mozillazine.org/gerv/archives/2005/10/the_price_of_fa.html">
  Gerv
of Mozilla
 </a>
 apparently shares my opinion about calling crashers
Denial of Service, and while I think
 <a href="http://blogs.msdn.com/ie/archive/2005/02/08/369119.aspx">
  Microsoft
 </a>
 is stretching the definition of Denial of Service, their situation is a bit
more complex, which may justify using the definition in their case.
</p>
<p>
 I&#39;d like to use this opportunity to ask the security research community to
revisit and update/clarify the meaning of their classifications for the
various contexts where they are used, and that in particular those who
maintain vulnerability databases should consider the actual severity of a
reported problem before posting the information.
</p>
<h3>
 &quot;I think I have found a Security Issue in Opera. What should I do?&quot;
</h3>
<p>
 I suggest: Report it to us before you publish it, so we can fix the
problem and release an updated version as soon as possible. We take
security seriously and will investigate all reports.
</p>
<p>
 You should file the report at
 <a href="https://bugs.opera.com/wizard/">
  https://bugs.opera.com/wizard/
 </a>
 , with the
severity &quot;Security Issue&quot; and you should fill in all information you have,
or suspect, about the problem:
</p>
<ul>
 <li>
  An explanation of the problem, as complete as possible, including
	why it is a Security Issue if that is not obvious.
 </li>
 <li>
  What version(s) of Opera you have tested, including which Operating
	System versions
 </li>
 <li>
  What is needed to repeat the problem, and step-by-step procedure
	for how to do it.
 </li>
 <li>
  An email address where we can contact you in case we need more
	information, and to keep you updated about progress.
 </li>
 <li>
  Actual testcases. The testcases should contain the minimum
	complexity required to reproduce the problem
 </li>
</ul>
<p>
 Unless they are very short, the testcases should be attached to the
bugreport by using the email address you get after you submit the
bugreport.
</p>
<p>
 Serverside testcases should, if there are no special reasons to use other
formats, be written in Perl, PHP or Python, and they should be
selfcontained.
</p>
<p>
 To protect the data integrity of the testcases, you should PKZip/WinZip
(.zip) or Tar/Gzip (.tar.gz) the testcases, even if they are single files.
</p>
<p>
 If you further wish to protect the testcases you may PGP encrypt them to
security (at) opera dot com, using the public key below, before attaching
it to the bug report.
</p>
<p>
 In fact, the best way to put it is that if you are planning to publish
your report you should submit at least as much information to us as you are planning to publish. I have seen reports that contained so little
information, compared to what was eventually published, that it was only
after publication that we were able to understand the true severity of the
problem.
</p>
<p>
 Allowing the application vendor to fix the issue before publishing the
advisory is good for the users of the application. There is no point
leaving end users vulnerable to attack. Opera, on our side, will
cooperate and verify the advisory; also we can point out if the issue is
not exploitable, helping to increase the quality of the advisory. As a
matter of principle we always try to give due credit to responsible
reporters in our changelogs or press releases.
</p>
<p>
 Happy, and responsible, hunting!
</p>
<pre>
 -----BEGIN PGP PUBLIC KEY BLOCK-----
Version: PGP 8.1
mQGiBELOLzkRBADVw74D8uj9bPNzgmfgf9tC72ckgqnxGHrRTMMK9y42XiLXiIYp
B66OjYpPiwgWzNqivcuyhc0HUGHZeezyE1wK4qGZ0cvxYuWrod2B0xyIXcDg6jTt
Vr/KgbfZy1RhLb9CPW3ngH28wbKAGud7dOsCjqvC+RWXAqPzN9ZXT6S3AwCg/+q6
pzhHdFMjvWrmRuWnypwO3mcD/iDbfiKe7c4nJs+yUveVjEkP+2f/zNg/3lSNUjBO
sg9CaXQlC7QCsTLEmDWAmjlebTI/DVlOfnGYa22myj1KLZdx5/uUG0aZUWDMOkKn
MjqLSyFRqb4VwSjetoojGcHob5zJQUeZ3+q4fSt66kWRwxARmnP3fyeHtdt+ddWa
KkMlBACkj3ZjnORHkyFQDru88IcZKgzTuQzhMcYmCp9vd+gMAy4+r3vUEq5EnXeg
ydBVBzReI4bDizjvpwUwbCEOn+ei8n95x2n7DHEjpn2THasb1ENkVfZ1iHi4OnO3
DaqvnXwNhnobEfEEcLjQDvMEjfWx/T1fZ6I1FwXJZr7TzwvJIrQpT3BlcmEgU2Vj
dXJpdHkgR3JvdXAgPHNlY3VyaXR5QG9wZXJhLmNvbT6JAF0EEBECAB0FAkLOLzkH
CwkIBwMCCgIZAQUbAwAAAAUeAQAAAAAKCRB2h/HMa2j6eQKoAKCv6+UWqdumoTjy
bYL5fzdVlUm8BgCdFX2FFnsyd1O9tSszh7JQ20is1065Ag0EQs4vORAIAPZCV7cI
fwgXcqK61qlC8wXo+VMROU+28W65Szgg2gGnVqMU6Y9AVfPQB8bLQ6mUrfdMZIZJ
+AyDvWXpF9Sh01D49Vlf3HZSTz09jdvOmeFXklnN/biudE/F/Ha8g8VHMGHOfMlm
/xX5u/2RXscBqtNbno2gpXI61Brwv0YAWCvl9Ij9WE5J280gtJ3kkQc2azNsOA1F
HQ98iLMcfFstjvbzySPAQ/ClWxiNjrtVjLhdONM0/XwXV0OjHRhs3jMhLLUq/zzh
sSlAGBGNfISnCnLWhsQDGcgHKXrKlQzZlp+r0ApQmwJG0wg9ZqRdQZ+cfL2JSyIZ
Jrqrol7DVekyCzsAAgIH/1nn7DeOo79hX8V3cgGRbHDyw/CC251salCt5gislPdV
RaUAyAC24m2MprPUr6JV6QfmmXgt/FYYbdscREPkbGplXkZFSDlcH8PKfzDDaewG
dApQhOCg4bsFNUX46l/kcooAjlihLZbb9XUJ0IqIvbxJze0NtHD6o7ABTQeEagK+
dL/CBlYxMWG4SvCCol88IjsdkwpCrpIMcnh1lGPMEfvCt86hk96Y1jUouve1sLGx
zx9QbCqo8TkJyi5bJhCGEHS90nEQsdHmaS+Grvm3eep9dTLxhn+Aj/WTpdUy8VD0
rwPAEKWOo4V4HdNEgGjSNOV8LSp8/2wZR0z7zZc3vYeJAEwEGBECAAwFAkLOLzkF
GwwAAAAACgkQdofxzGto+nnZ1ACg9xn8tVb99DfZsC6wRGzr7dtfMU0An1aY3FZ7
k3eRlyzdgO2F+WOHux4J
=w+QX
-----END PGP PUBLIC KEY BLOCK-----
</pre>
</div>

