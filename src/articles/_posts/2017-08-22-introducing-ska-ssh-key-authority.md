---
title: 'Introducing SKA - SSH Key Authority'
authors:
- krystian-zubel
intro: 'The Opera IT department keeps all of our services online. In their work, they need to manage thousands of servers. Today, one of their tools that is used for SSH Access Control becomes Open Source - check out how it could make your life simpler!'
tags:
- open-source
- opera
- security
license: cc-by-3.0
---

SKA is an open source access control system for SSH-based servers. It was originally created by
Opera Software and designed to provide scalable, secure and automated oversight on SSH public keys
access. SKA allows you to manage a user’s access to servers in a simple manner, no matter if it’s a
small amount of users and servers or hundreds of machines with a company’s LDAP connecting user
accounts. Some advantages include the ability to delegate authority over server access (defining who
has enough knowledge to approve access), its modern UI and no additional requirements apart from
proper SSH daemon configurations on managed servers.

At Opera, we have always preferred SSH Keys authentication method over weak passwords. However, as
we have had to oversee thousands of servers grouped in multiple services with SSH Keys distributed
among them, it turned out that there was no suitable solution on the market which met our needs.
Available systems either were not prepared to work in a flexible manner or required a lot of hassle
to distribute custom-built packages with authentication modules. That lead us to develop our own
solution.

Using flexible backend structures for synchronization, database and Web UI, we have created a system
that not only allows us to manage accesses but also to tune plenty of possible SSH hardening
settings per user. Diverse service specification (from servers using only server-to-server access
and to servers available for all users that are in our company LDAP) resulted in a very flexible
solution. Still, it has not lost it’s simple and responsive interface - because of the people who
work on this!

Today, after few years of using, fixing and expanding our system with more features, we would like
to allow everyone to use SKA - SSH Key Authority. No matter if you manage two or three servers or
you’re part of LDAP-based organization with thousands of users, SSH Key Authority can help you in
maintaining access and proper auditing of changes every day.

SKA is released under Apache License 2.0, and is
[hosted on GitHub](https://github.com/operasoftware/ssh-key-authority).

The system will continue to be developed and updated and we plan to add a few more features, such as
support for two-factor authentication with time-based tokens, in the near future.

Finally, a big kudos to the Opera IT Team for development and bug catching, and to all Opera
Employees for their extensive testing and feature requests!
