const getState = ({ getStore, getActions, setStore }) => {
    const store = {
        contacts: [],
        userURL: "https://playground.4geeks.com/apis/fake/contact/agenda/josefrometa",
        apiURL: "https://playground.4geeks.com/apis/fake/contact/"
    };

    const actions = {
        getContacts: async () => {
            try {
                const response = await fetch(store.userURL);
                const data = await response.json();
                setStore({ contacts: data });
            } catch (error) {
                console.log(error);
            }
        },

        addContact: async (data) => {
            try {
                const response = await fetch(`${store.apiURL}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    getActions().getContacts();
                }

                return response.status;
            } catch (error) {
                console.log(error);
            }
        },

        deleteContact: async (id) => {
            try {
                const response = await fetch(`${store.apiURL}${id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                });

                if (response.ok) {
                    getActions().getContacts();
                }
            } catch (error) {
                console.log(error);
            }
        },

        editContact: async (id, contact) => {
            try {
                const response = await fetch(`${store.apiURL}${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(contact)
                });

                if (response.ok) {
                    getActions().getContacts();
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return { store, actions };
};

export default getState;
