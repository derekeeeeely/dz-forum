insert into public.section(name, sort, description) values('公告牌', 1, '仇复者联盟公告区');
insert into public.section(name, sort, description) values('综合讨论区', 2, '仇复者联盟综合讨论区');
insert into public.section(name, sort, description) values('交易区', 3, '仇复者联盟交易区');

insert into public.section(level, parent, name, sort, description) values(2, 1, '系统公告', 1, '我们又干啥了');
insert into public.section(level, parent, name, sort, description) values(2, 1, '管理员公告', 2, '我们可以干啥了');

insert into public.section(level, parent, name, sort, description) values(2, 2, '俱乐部活动', 1, '俱乐部活动专区');
insert into public.section(level, parent, name, sort, description) values(2, 2, '闲聊', 2, '闲聊专区');
insert into public.section(level, parent, name, sort, description) values(2, 2, '求助', 3, '求助专区');

insert into public.section(level, parent, name, sort, description) values(2, 3, '买买买', 1, '求仙女赏脸');
insert into public.section(level, parent, name, sort, description) values(2, 3, '卖卖卖', 2, '走过路过别错过');