import React, { useState } from 'react';

export default function SharedEmailsList({ emails = [], onSharePhoto }) {
  const [inviteEmail, setInviteEmail] = useState('');

  return (
    <div>
      <h3>Shared With:</h3>
      {emails.map((email) => (
        <div key={email}>
          <p>{email}</p>
        </div>
      ))}
      <div className="shared-with-form" style={{ marginBottom: '50px' }}>
        <input
          type="text"
          value={inviteEmail}
          onChange={(e) => setInviteEmail(e.target.value)}
          placeholder="Enter email to share with"
        />
        <button
          onClick={() => {
            onSharePhoto(inviteEmail);
            setInviteEmail('');
          }}
        >
          Share
        </button>
      </div>
    </div>
  );
}
