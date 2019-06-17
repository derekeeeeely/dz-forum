```shell
wget -q -O - http://www.xunsearch.com/scws/down/scws-1.2.3.tar.bz2 | tar xf -
cd scws-1.2.3 ; ./configure ; make install

git clone https://github.com/amutu/zhparser.git

make && make install

psql regneva derekely -c 'CREATE EXTENSION zhparser'
```

```sql
create extension zhparser;

CREATE TEXT SEARCH CONFIGURATION regnevazhcfg (PARSER = zhparser);
ALTER TEXT SEARCH CONFIGURATION regnevazhcfg ADD MAPPING FOR n,v,a,i,e,l WITH simple;

create index idx_topic_title on topic using gin(to_tsvector('regnevazhcfg',title));
create index idx_topic_content on topic using gin(to_tsvector('regnevazhcfg',content));
create index idx_topic_tags on topic using gin(array_to_tsvector('regnevazhcfg',tags));

select * from topic
	where to_tsvector('regnevazhcfg',title) @@ to_tsquery('regnevazhcfg', '分词')
		OR to_tsvector('regnevazhcfg',content) @@ to_tsquery('regnevazhcfg', '分词');
```