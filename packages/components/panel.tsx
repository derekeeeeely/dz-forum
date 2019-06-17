import * as React from 'react';

export default function Panel(props: any) {
  return <div style={{ background: '#fff', padding: 20 }}>{props.children}</div>;
}
