import React from 'react'

export const Profile = ({ userData }) => {
    return (
        <article className="profile-article">
            {userData ? (
                <>
                    <section>
                        <ul>
                            <li id="profileNames">{userData.firstName} {userData.lastName}</li>
                            <li id='profileEmail'>{userData.email}</li>
                            <li id='profilePhone'>{userData.phoneNumber}</li>
                        </ul>
                    </section>
                </>
            ) : (
                <p></p>
            )}
        </article>
    )
}