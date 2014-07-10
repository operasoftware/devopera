---
title: What’s a Browser Security Issue, Anyway?
authors:
- yngve-pettersen
intro: 'A large number of people are looking for security problems and vulnerabilities in Opera and other applications. Some people don’t like this, but I think it is actually fine. When done responsibly this can increase security for the application and is thus of great benefit to the users. However, when done irresponsibly, the activity can cause needless alarm and waste the time of the application vendors AND the end users.'
tags:
- security
- labs
license: os-asa
---

A large number of people are looking for security problems and vulnerabilities in Opera and other applications. Some people don’t like this, but I think it is actually fine. When done responsibly this can increase security for the application and is thus of great benefit to the users. However, when done irresponsibly, the activity can cause needless alarm and waste the time of the application vendors AND the end users.

One example of irresponsibility is how they report and classify the issues they find, and how the issues are communicated to the application vendor.

The primary problems I see with some of the reporting is that:

- Many reports are about problems that may be bugs, but they are not really Security Issues
- Some reports exaggerate the severity of the problem
- Some reporters do not give us an opportunity to check the problem, verify that it is indeed a Security Issue, and release a patched version before they publish their findings.

The terms “Security Issue” and “Vulnerability” cover a large number of serious problems within an application.

Security real-issues list:

- Makes the application reveal the user’s protected information, such as filesystem info, username, passwords etc, without authorization.
- Makes the application mislead the user about what is going on
- Makes the application execute arbitrary code
- Attacks that permanently disable the application
- Uses weak protocols

Those are just some of the possibilities. As important are what should NOT be called a Security Issue.

Security non-issues list:

- Crashes that do not prevent restart of the application
- That users are not able to access their online banking site, shopping site, etc.
- That cookies do not work
- That the application uses stricter security protections than another competing application.

Sometimes, some reporters wrongly classify instances from the non-issues list as issues from the real-issues list.

The two main severity concern prone to be exaggerated are allegations that a problem “can be used to execute arbitrary code” or is a “Denial of Service”-attack.

It seems that the combination of a very large input and a crash leads some people to automatically think the problem may be used to “execute arbitrary code”, that is, take over the user’s computer. That is not always the case, and is usually only possible for what is called a stack buffer overflow, even though it is also sometimes possible for heap (allocated) buffer overflows. However, we have seen this phrase used even for ordinary NULL pointer crashes that had no possibility whatsoever to be abused.

Another exaggeration is calling any crash that can be triggered by a website a “Denial of Service”-attack. In my opinion, crashing a server can rightly be called a Denial of Service as long as the server is not able to automatically recover, because bringing down the server will deny service to all users.

Crashing a client, while it is an undesirable event, can only be achieved by enticing the user into accessing a document that crashes the client, and even then it will usually only inconvenience the user long enough to restart the application. That is not sufficient cause to call it a Denial of Service; in most of these cases it is a stability issue.

The only way, in my opinion, that a crash in a client can be called a denial of service is if the attack causes the client to crash again when it is restarted, and when fixing the problem requires more than changing the immediate startup configuration (previous session or blank page), requiring editing configuration files or complete reinstallation.

In my opinion, calling a normal crash problem in a client a “Denial of Service” vulnerability is a devaluation of the meaning of the term “Denial of Service”, which eventually may rob it completely of its correct meaning, much in the same way that the word “hacker” is now considered to mean “computer criminal”, not “highly skilled computer specialist”, which was its original meaning.

One might even ask if an attack that disables the client really is a security problem. After all, it does not compromise the user’s information security or privacy, or the system’s integrity.

Other browser developers have also seen this kind of exaggeration, and [ Gerv of Mozilla ][1] apparently shares my opinion about calling crashers Denial of Service, and while I think [ Microsoft ][2] is stretching the definition of Denial of Service, their situation is a bit more complex, which may justify using the definition in their case.

[1]: http://weblogs.mozillazine.org/gerv/archives/2005/10/the_price_of_fa.html
[2]: http://blogs.msdn.com/ie/archive/2005/02/08/369119.aspx

I’d like to use this opportunity to ask the security research community to revisit and update/clarify the meaning of their classifications for the various contexts where they are used, and that in particular those who maintain vulnerability databases should consider the actual severity of a reported problem before posting the information.

## “I think I have found a Security Issue in Opera. What should I do?”

I suggest: Report it to us before you publish it, so we can fix the problem and release an updated version as soon as possible. We take security seriously and will investigate all reports.

You should file the report at [https://bugs.opera.com/wizard/][3], with the severity “Security Issue” and you should fill in all information you have, or suspect, about the problem:

[3]: https://bugs.opera.com/wizard/

- An explanation of the problem, as complete as possible, including why it is a Security Issue if that is not obvious.
- What version(s) of Opera you have tested, including which Operating System versions
- What is needed to repeat the problem, and step-by-step procedure for how to do it.
- An email address where we can contact you in case we need more information, and to keep you updated about progress.
- Actual testcases. The testcases should contain the minimum complexity required to reproduce the problem

Unless they are very short, the testcases should be attached to the bugreport by using the email address you get after you submit the bugreport.

Serverside testcases should, if there are no special reasons to use other formats, be written in Perl, PHP or Python, and they should be selfcontained.

To protect the data integrity of the testcases, you should PKZip/WinZip (.zip) or Tar/Gzip (.tar.gz) the testcases, even if they are single files.

If you further wish to protect the testcases you may PGP encrypt them to <a href="mailto:security@opera.com">security@opera.com</a>, using the public key below, before attaching it to the bug report.

In fact, the best way to put it is that if you are planning to publish your report you should submit at least as much information to us as you are planning to publish. I have seen reports that contained so little information, compared to what was eventually published, that it was only after publication that we were able to understand the true severity of the problem.

Allowing the application vendor to fix the issue before publishing the advisory is good for the users of the application. There is no point leaving end users vulnerable to attack. Opera, on our side, will cooperate and verify the advisory; also we can point out if the issue is not exploitable, helping to increase the quality of the advisory. As a matter of principle we always try to give due credit to responsible reporters in our changelogs or press releases.

Happy, and responsible, hunting!

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
