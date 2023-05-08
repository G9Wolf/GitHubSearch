import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserImg, UserMainDiv, DataDiv, NameText, SubText, SubTitle, RepoDiv } from "../styles/UserPageStyles"

function ordenarDados(data) {
    data.sort((a, b) => {
        if (a.stargazers_count > b.stargazers_count) {
            return -1;
        }
        if (a.stargazers_count < b.stargazers_count) {
            return 1;
        }
        return 0
    });
    return data
}


function UserPage() {
    const valorForm = useSelector(state => state.valorForm);
    const [userData, setUserData] = useState(null);
    const [userRepos, setUserRepos] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/${valorForm}`);
            const data = await response.json();
            setUserData(data);
        };

        fetchData();
    }, [valorForm]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.github.com/users/${valorForm}/repos`);
            const data = await response.json();
            console.log("data", data)
            const ordenedData = ordenarDados(data)
            setUserRepos(ordenedData);
        };

        fetchData();
    }, [valorForm]);

    return (
        <div>
            {userData && (
                <UserMainDiv>
                    <UserImg src={userData.avatar_url} alt="Avatar do usuário" />
                    <DataDiv>
                        <NameText> {userData.name}</NameText>
                        <SubText>Número de seguidores: {userData.followers}</SubText>
                        <SubText>Número de seguidos: {userData.following}</SubText>
                        <SubText>Email: {userData.email}</SubText>
                        <SubText>Bio: {userData.bio}</SubText>
                    </DataDiv>
                </UserMainDiv>
            )}

            <SubTitle>Repositórios do Usuário:</SubTitle>

            {userRepos && userRepos.map(repo => (
                <RepoDiv key={repo.id}>
                    <p>{repo.name} =  </p>
                    <p>{repo.stargazers_count}⭐</p>
                </RepoDiv>
            ))}


        </div>
    );
}

export default UserPage;
